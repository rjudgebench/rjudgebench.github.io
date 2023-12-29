
let obj_to_tr = (obj) => {
    let modelCell;
    let avgCell;

    // console.log(obj["#"]);

    if (parseFloat(obj["#"]) < 4) {
        modelCell = `<td style="text-align: left;"><strong class="best-model-text">${obj.Model}</strong></td>`;
        avgCell = `<td><strong class="best-model-text">${obj.Avg}</strong></td>`;
    } else if (parseFloat(obj["#"]) < 11) {
        modelCell = `<td style="text-align: left;"><strong class="high-model-text">${obj.Model}</strong></td>`;
        avgCell = `<td><strong class="high-model-text">${obj.Avg}</strong></td>`;
    } else {
        modelCell = `<td style="text-align: left;"><strong>${obj.Model}<strong></td>`;
        avgCell = `<td><strong>${obj.Avg}</strong></td>`;
    }

    return `<tr>
        <td>${obj["#"]}</td>
        ${modelCell}
        <td>${obj.Method}</td>
        <td>${obj.Learning}</td>
        <td>${obj.Size}</td>
        <td>${obj.Param}</td>
        <td><a href="${obj.Link}" class="ext-link" style="font-size: 16px;">Link</a></td>
        <td>${obj.Date}</td>
        <td>${obj.NAT}</td>
        <td>${obj.SOC}</td>
        <td>${obj.LAN}</td>
        <td>${obj.TXT}</td>
        <td>${obj.IMG}</td>
        <td>${obj.NO}</td>
        <td>${obj["G1-6"]}</td>
        <td>${obj["G7-12"]}</td>
        ${avgCell}
    </tr>`
}

let table = document.getElementById("results");
html = "";
for (let i of leaderboard) {
    html += obj_to_tr(i);
}

table.getElementsByTagName("tbody")[0].innerHTML = html;

function reflow(elt){
    console.log(elt.offsetHeight);
}

reflow(table);
