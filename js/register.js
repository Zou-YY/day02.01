$(function(){
    $(".info p u").click(function(){
        var $input = $(this).parent().children("input");
        if($input.attr("type") === "password"){
            $input.attr("type", "text");
        }else{
            $input.attr("type", "password");
        }
    });
    //  弹出框
    $("#submit, #rePassSubmit").on("click", function(){
        if($(".rePassInfo").css("display") === "block"){
            $(".regPopup p span").text("修改成功");
        }else{
            $(".regPopup p span").text("创建成功");
        }
        $(".regConWrap").css("display", "flex");
    });
    $(".popupSure").click(function(){
        $(".regConWrap").css("display", "none");
    })

    // 找回密码与用户注册
    $("#rePassWord").click(function(){
        $(this).css({"color": "#00fff0", "background": ''});
        $("#userReg").css({"color": "#fff", "background": 'rgba(33, 50, 112 , 0.8)'});
        $(".regInfo").css("display","none");
        $(".rePassInfo").css("display","block");
    });
    $("#userReg").click(function(){
        $(this).css({"color": "#00fff0", "background": ''});
        $("#rePassWord").css({"color": "#fff", "background": 'rgba(33, 50, 112 , 0.8)'});
        $(".rePassInfo").css("display","none");
        $(".regInfo").css("display","block");
    })

})

function loading() {
    $('body').loading({
        loadingWidth:240,
        title:'验证码错误',
        name:'test',
        discription:'这是一个描述...',
        direction:'row',
        type:'origin',
        originBg:'#71EA71',
        originDivWidth:30,
        originDivHeight:30,
        originWidth:4,
        originHeight:4,
        smallLoading:false,
        titleColor:'#213270',
        loadingBg:'#1870ca',
        loadingMaskBg:'rgba(22,22,22,0.2)'
    });

    setTimeout(function(){
        removeLoading('test');
    },1000);
}