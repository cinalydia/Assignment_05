/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

$("add").addEventListener('click', function () {
    "use strict";
    var name = $("name").value;
    var title = $("title").value;
    var id = $("id").value;
    
    var addEmployee = [];
    addEmployee[0] = name;
    addEmployee[1] = title;
    addEmployee[2] = id;
    
    var table = $("table");
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = addEmployee[0];
    cell2.innerHTML = addEmployee[1];
    cell3.innerHTML = addEmployee[2];
    cell4.innerHTML = "<input type='button' onclick='deleteBtn(this)' value='delete'></input>";
});

function deleteBtn(r) {
    "use strict";
    //$("table").deleteRow(-1);
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}