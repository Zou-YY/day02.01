$(function(){
    // 轮播
    $(".kcxfz .navAbs").click(function(){
        $(".animated").css("display","none");
        setTimeout(function(){
            $(".keChiXu").css("display","block");
        },100)
    })
    $(".hxb .navAbs").click(function(){
        $(".animated").css("display","none");
        setTimeout(function(){
            $(".heXinBan").css("display","block");
        },100)
    })
    $(".yljk .navAbs").click(function(){
        $(".animated").css("display","none");
        setTimeout(function(){
            $(".yiLiaoJianKan").css("display","block");
        },100)
    })
    $(".hnzh .navAbs").click(function(){
        $(".animated").css("display","none");
        setTimeout(function(){
            $(".zongHe").css("display","block");
        },100)
    })
    $(".cqzh .navAbs").click(function(){
        $(".animated").css("display","none");
        setTimeout(function(){
            $(".zongHe").css("display","block");
        },100)
    })
    // 高亮
    $(".navAbs").click(function(){
        $(".navRel dt").css("color","#fff");
        $(".navAbs").css("color","#fff");
        $(this).css("color","#d00");
        $(this).parents("dl").find("dt").css("color","pink");
    })


})
