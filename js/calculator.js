/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

//Btns Event Listener
$("calcBtns").addEventListener("click", function (e) {
    "use strict";
    $("result").value += e.target.value;
});

//Calculate numbers
$("equal").addEventListener("click", function () {
    "use strict";
    $("result").value = eval($("result").value);
});