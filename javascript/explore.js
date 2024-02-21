let body = document.getElementById("content-body");
let display = document.getElementById("display");
let mybtn = document.getElementsByClassName("mybutton")

for (var i = 0; i < mybtn.length; i++) {
    (
        function (n) {
            mybtn[n].onclick = function () {
                scenario = mybtn[n].innerText;
                filter_data(scenario);
            }
        }(i)
    )
}

// display the page
filter_data();

// draw the page
function create_page(d) {
    if (d.length === 0) {
        body.innerHTML = "<p>No example satisfies all the filters.</p>";
    } else {
        body.innerHTML = create_col(d.slice(0, d.length));
    }
    reflow(body);
    console.log("reflowed");
}

function create_col(data) {
    res = [];
    for (each of data) {
        res.push(create_example(each));
    }
    return `<div class="display-col"> ${res.join("")} </div>`;
}


function create_example(data) {
    let profile = make_pf(data.profile);
    let record = make_record(data.contents);
    let label = make_label(data.label);
    let risk_desc = make_risk_desc(data.risk_description);
    html = make_box([profile, record, label, risk_desc]) + "<hr/>";
    return html;
}

// creates a div with profile text in it
function make_pf(text) {
    if (text === null) return "";
    let html = `
            <p class="profile-txt"><b>Profile: </b>${text}</p>
    `;
    return html;
}

function make_label(text) {
    let html = `
            <p class="label-txt"><b>Label: </b>${text}</p>
    `;
    return html;
}

function make_risk_desc(text) {
    let html = `
            <p class="riskdesc-txt"><b>Risk Description: </b><font color="#F07167">${text}</font></p>
    `;
    return html;
}

function make_record_item(r) {
    html = ``;
    if(r.role == 'user') {
        html += `<p class="record-txt"><font color="#70AD47">User</font>: `;
        if(r.content){
            html+= `${r.content}</p>`;
        }
        else{
            html+= `None</p>`;
        }
    } else if (r.role == 'agent') {
        html += `<p class="record-txt"><font color="#4472C4">Agent</font>: `;
        if(r.thought){
            html+= `[Thought] ${r.thought}`;
        }
        if(r.action){
            html+= `<br>[Action] ${r.action}</p>`
        }
    } else if (r.role == 'environment') {
        html += `<p class="record-txt"><font color="#FFC107">Environment</font>: `;
        if(r.content){
            html+= `${r.content}</p>`;
        }
        else{
            html+= `None</p>`;
        }
    }

    return html;
}
function make_record(record) {
    let html = `
            <p><b>Record </b></p>
    `;
    for (var i = 0; i < record.length; i++) {
        var r = record[i];
        for (var j = 0; j < r.length; j++) {
            html += make_record_item(r[j]);
        }
    }

    return html;
}

function make_box(contents, cls = "") {
    if (contents.join("").length === 0) return "";
    let html = `
        <div class="box ${cls}"> 
            ${contents.join(" ")}
        </div>
    `;
    return html;
}

function get_data(scenario = '') {
    data = problem_data;
    if (scenario == '') {
        return data;
    }
    let res = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].scenario === scenario) {
            res.push(data[i]);
        }
    }
    return res;
}

function filter_data(scenario = '') {
    res = get_data(scenario);
    d = _.sample(res, Math.min(10, res.length));
    for (each of d) {
        console.log(d);
    }
    create_page(d);
}

// force the browser to reflow
function reflow(elt) {
    elt.offsetHeight;
}