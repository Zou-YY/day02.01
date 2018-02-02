window.alert = alert;
function alert(data) {
    textNode = data ? data  : '';

    var alertStr = `<div class="alertWrap">
        <div class="alert">
            <p class="alertCon">${textNode}</p>
            <button class="alertBtn">确定</button>
        </div>
    </div>`;

    $("body").append(alertStr);
    $(".alertBtn").click(function(){
        console.log("123")
        $("body").children(".alertWrap").remove();
    })
}

    