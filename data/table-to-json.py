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


# read leaderboard.md table and create a list of dictionaries
with open("leaderboard1.md", "r") as f:
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


with open("raw-data1.js", "w") as f:
    f.write("leaderboard = ")
    json.dump(lines, f, indent=4)


# split lines into 3 categories
human_line = lines.pop(0) # pop human performance line 
assert human_line["Model"] == "Human"
random_line = lines.pop(0) # pop random chance line
assert random_line["Model"] == "Random"
# print("human_line:", human_line)
# print("random_line:", random_line)


f1_lines = [ln for ln in lines if ln["F1"] != '-']

print("F1 lines:", len(f1_lines))


# rank models
f1_lines = sorted(f1_lines, key=lambda x: float(x["F1"]), reverse=True)

f1_lines[0]["Model"] += " 🥇"
f1_lines[1]["Model"] += " 🥈"
f1_lines[2]["Model"] += " 🥉"

human_line["#"] = "*"
random_line["#"] = "*"

for i, ln in enumerate(f1_lines):
    ln["#"] = str(i+1) # rank by avg


sorted_lines = [human_line] + [random_line] + f1_lines

with open("../javascript/leaderboard-data1.js", "w") as f:
    f.write("leaderboard = ")
    json.dump(sorted_lines, f, indent=4)

