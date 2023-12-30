import sys, os
import json
import re

input = lambda: sys.stdin.readline().strip()
intlist = lambda: [int(i) for i in input().split()]
flolist = lambda: [float(f) for f in input().split()]
mat = lambda a, b, v: [[v] * b for _ in range(a)]


def remove_html_tags(text):
    """Remove html tags from a string"""
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)

def debold(ls):
    for i in range(len(ls)):
        ls[i] = ls[i].replace("**", "")
    return ls

def process_sources(s):
    s = s.split("](")
    source = s[0][1:]
    link = s[1][:-1]
    return link


# read leaderboard.md table and create a list of dictionaries
with open("leaderboard.md", "r") as f:
    # read header
    header = f.readline().strip().split("|")
    header = [h.strip() for h in header]
    header = header[1:-1]
    debold(header)
    header = [remove_html_tags(h) for h in header]

    # read lines
    lines = f.readlines()
    lines = [l.strip() for l in lines if len(l.strip()) > 0]
    lines = [l.split("|") for l in lines]
    lines = [[e.strip() for e in l] for l in lines]
    lines = [[remove_html_tags(e) for e in l] for l in lines]
    lines = [l[1:-1] for l in lines]
    lines = [debold(l) for l in lines]
    lines = lines[1:]
    
    # create list of dictionaries
    lines = [dict(zip(header, l)) for l in lines]

    # process model sources
    for ln in lines:
        ln["Link"] = process_sources(ln["Link"])


with open("raw-data.js", "w") as f:
    f.write("leaderboard = ")
    json.dump(lines, f, indent=4)


# split lines into 3 categories
human_line = lines.pop(0) # pop human performance line 
assert human_line["Model"] == "Human Performance"
random_line = lines.pop(0) # pop random chance line
assert random_line["Model"] == "Random Chance"
# print("human_line:", human_line)
# print("random_line:", random_line)


avg_lines = [ln for ln in lines if ln["Avg"] != '-']
img_lines = [ln for ln in lines if ln["Avg"] == '-' and ln["IMG"] != '-']
txt_lines = [ln for ln in lines if ln["Avg"] == '-' and ln["IMG"] == '-' and ln["TXT"] != '-']
rest_lines = [ln for ln in lines if ln["Avg"] == '-' and ln["IMG"] == '-' and ln["TXT"] == '-']

print("AVG lines:", len(avg_lines))
print("IMG lines:", len(img_lines))
print("Text lines:", len(txt_lines))
print("ALL lines:", len(lines)+2)

assert len(rest_lines) == 0
print("rest_lines", len(rest_lines))
# print("rest_lines", rest_lines)

# rank models
"""
lines is a list of dictionaries
There are multiple attributes, including "Avg" and "IMG"
if attribute "Avg" is a float, then rank by "Avg"
else if attribute "IMG" is a float, then rank by "IMG":
"""
avg_lines = sorted(avg_lines, key=lambda x: float(x["Avg"]), reverse=True)
img_lines = sorted(img_lines, key=lambda x: float(x["IMG"]), reverse=True)
txt_lines = sorted(txt_lines, key=lambda x: float(x["TXT"]), reverse=True)

avg_lines[0]["Model"] += " 🥇"
avg_lines[1]["Model"] += " 🥈"
avg_lines[2]["Model"] += " 🥉"

human_line["#"] = "*"
random_line["#"] = "*"

for i, ln in enumerate(avg_lines):
    ln["#"] = str(i+1) # rank by avg

for i, ln in enumerate(img_lines):
    ln["#"] = "-" # rank by img

sorted_lines = [human_line] + [random_line] + avg_lines + img_lines + txt_lines

with open("../javascript/leaderboard-data.js", "w") as f:
    f.write("leaderboard = ")
    json.dump(sorted_lines, f, indent=4)

