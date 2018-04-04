/*eslint-env browser*/

//STEP 1
/*function clickBtn() {
    "use strict";
    window.alert("I have been clicked");
}*/


//STEP 2
/*var getId = window.document.getElementById("test");
getId.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};*/


//STEP 3
/*var test = document.getElementById("test");
test.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
});*/


//STEP 4
/*window.addEventListener("load", function () {
   "use strict";
    var test = document.getElementById("test");
    test.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
});*/


//STEP 5??

/*window.addEventListener("load", init, false);
function init() {
    "use strict";
    var test = document.getElementById("test");
    test.addEventListener("click", function (callback) {
        callback(window.alert("I have been clicked"));
    });
}*/


//STEP 6
/*document.getElementById("redirect").addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
    event.preventDefault();
});*/

//--OR?--
/*document.getElementById("redirect").addEventListener("click", function (e) {
    "use strict";
    e.preventDefault();
    window.alert("I have been clicked");
});*/


//STEP 7
/*var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

$("btn_text").addEventListener("click", function () {
    "use strict";
    $("btn_text").disabled = true;
    
    var textValue = $("input_text").value;
    window.alert(textValue);
});*/


//STEP 8
/*function init() {
    "use strict";
    var btn = window.document.getElementById("btn"), width = 500, height = 300;
    btn.addEventListener("click", function () {
        window.open("newpage.html", "btn", "width=300,height=300").resizeTo(width, height);
    });
}
window.addEventListener("load", init);*/


//STEP 9??
/*var boo = function boo() {
    "use strict";
    window.console.log("Boo!");
};
document.getElementById("btnStart").addEventListener("click", function () {
    "use strict";
    window.setInterval(boo, 500);
});

document.getElementById("btnStop").addEventListener("click", function () {
    "use strict";
    window.clearInterval(boo);
});*/


//STEP 10???
/*when user selects option from list, display option in box

when user clicks the button 'select', display option from box in an alert*/

/*window.document.getElementById("fruit").addEventListener("click", function (e) {
    "use strict";
    var pick = window.document.getElementById("fruitPick");
    pick = e.target.value;
    
    window.document.getElementById("selectfruit").addEventListener("click", function () {
        window.alert(pick = e.target.value);
    });
});*/

