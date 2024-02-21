
let obj_to_tr = (obj) => {
    let modelCell;
    let F1Cell;

    // console.log(obj["#"]);

    if (parseFloat(obj["#"]) < 4) {
        modelCell = `<td style="text-align: left;"><strong class="best-model-text">${obj.Model}</strong></td>`;
        F1Cell = `<td><strong class="best-model-text">${obj.F1}</strong></td>`;
    } else if (parseFloat(obj["#"]) < 11) {
        modelCell = `<td style="text-align: left;"><strong class="high-model-text">${obj.Model}</strong></td>`;
        F1Cell = `<td><strong class="high-model-text">${obj.F1}</strong></td>`;
    } else {
        modelCell = `<td style="text-align: left;"><strong>${obj.Model}<strong></td>`;
        F1Cell = `<td><strong>${obj.F1}</strong></td>`;
    }

    return `<tr>
        <td>${obj["#"]}</td>
        ${modelCell}
        <td>${obj.Method}</td>
        <td>${obj.F1}</td>
        <td>${obj.Recall}</td>
        <td>${obj.Specificity}</td>
        <td>${obj.Validity}</td>
        <td>${obj.Grade}</td>
        <td>${obj.Effectiveness}</td>
        <td>${obj.Alertness}</td>
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
