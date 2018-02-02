window.alert = alert;

function alert(data) {

var a = document.createElement("div"),

p = document.createElement("p"),

btn = document.createElement("div"),

textNode = document.createTextNode(data ? data : ""),

btnText = document.createTextNode("确定");

// 控制样式

css(a, {

"position" : "fixed",

"left" : "0",

"right" : "0",

"top" : "50%",

"width" : "300px",

"margin" : "0 auto",

"background-color" : "#f00",

"font-size" : "20px",

"text-align" : "center",

"z-index" : "999999"

});

css(btn, {

"background" : "blue",

})

// 内部结构套入

p.appendChild(textNode);

btn.appendChild(btnText);

a.appendChild(p);

a.appendChild(btn);

// 整体显示到页面内

document.getElementsByTagName("body")[0].appendChild(a);

// 确定绑定点击事件删除标签

btn.onclick = function() {

a.parentNode.removeChild(a);

}

}

function css(targetObj, cssObj) {

var str = targetObj.getAttribute("style") ? targetObj.getAttribute("style") : "";

for(var i in cssObj) {

str += i + ":" + cssObj[i] + ";";

}

targetObj.style.cssText = str;

}