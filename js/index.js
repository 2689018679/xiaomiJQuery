$(function () {

    ////////////////////购物车///////////////////////

    $(".cart").mouseenter(function () {
        $(".cart1").css({"height":"97px","boxShadow":"0 15px 30px rgba(0, 0, 0, .1)"});
        $(".cart").css("background","#fff");
    })
    $(".cart1").mouseleave(function () {
        $(".cart1").css({"height":"0","boxShadow":"none"});
        $(".cart").css("background","#424242");
    })

    ////////////////////导航////////////////////////

    $(".nav_top li").hover(function () {
        $(".nav_topBox").eq($(this).index()).css("height","230px")
    },function () {
        $(".nav_topBox").eq($(this).index()).css("height","0")
    })

    ////////////////////侧导航///////////////////////

    $(".banner_left li").hover(function () {
        $(".banner_box").eq($(this).index()).css("display","block")
    },function () {
        $(".banner_box").eq($(this).index()).css("display","none")
    })

    ////////////////选项卡///////////////////////

    $(".electricalTop>.right>a").mouseenter(function () {
        $(".electrical_bottom>.xxkbox").css("z-index","5").eq($(this).index()).css("z-index","10")
    })

    ///////////////轮播图/////////////////////

    let num=0;
    let t=setInterval(move,1000);
    
    $(".banner").hover(function () {
        clearInterval(t);
    },function () {
        t=setInterval(move,1000);
    })

    $(".btn1").click(function () {
        move("pro")
    })
    $(".btn2").click(function () {
        move("next")
    })

    function move(type="next"){
        if (type=="next"){
            num++;
            if(num>=$(".banner .whole li").length){
                num=0;
            }
        }else{
            num--
            if(num<0){
                num=$(".banner .whole li").length-1;
            }
        }
        $(".banner .whole li").css("z-index","5").eq(num).css("z-index","10");
        $(".banner .spot li").removeClass("hot").eq(num).addClass("hot");
    }
    $(".banner .spot li").click(function () {
        $(".banner .whole li").css("z-index","5").eq($(this).index()).css("z-index","10");
        $(".banner .spot li").removeClass("hot").eq($(this).index()).addClass("hot");
        num=$(this).index()
    })

    ////////////////////小米闪购/////////////////////////


    let times=0;
    function purchasemove(type="right"){
        if(type=="right") {
            times++;
            if (times == 4) {
                times = 3;
            }
        }else{
            times--;
            if(times==-1){
                times=0;
            }
        }
        $(".purchase_right ul").eq(0).css({
            transform: "translateX("+(-973*times)+"px)"
        })
    }
    $(".purchase .right span").eq(0).click(function () {
        purchasemove("left")
    })
    $(".purchase .right span").eq(1).click(function () {
        purchasemove("right")
    })


    ////////////////选项卡///////////////////////////

    function xxkbox(num) {
        let a=$(".electrical_top").eq(num).find(".right a")
        let xxkbox=$(".electrical_bottom").eq(num).find(".xxkbox")

        $(a).mouseenter(function () {
            let index=$(this).index()
            xxkbox.css("z-index","5").eq(index).css("z-index","10")
        })
    }
    for(let i=1;i<6;i++){
        xxkbox(i)
    }


    ////////////////////////双下标轮播图/////////////////////////////

    function lbt(num,now,next) {
        
        let contentBox=$(".content_bottom li").eq(num).find(".contentBox")
        let spots=$(".content_bottom li").eq(num).find(".spot span")
        let btnl=$(".content_bottom li").eq(num).find(".paging1")
        let btnr=$(".content_bottom li").eq(num).find(".paging2")
        function move(type="right") {
            if(type=="right"){
                next++
                console.log(contentBox.length);
                if(next>=contentBox.length){
                    next=contentBox.length-1
                    return;
                }
                contentBox.eq(next).css("left","296px").animate({left:0},500)
                contentBox.eq(now).animate({left:-296},500)
                spots.removeClass("hot").eq(next).addClass("hot")
                now=next
            }else{
                next--
                if(next<0){
                    next=0
                    return;
                }
                contentBox.eq(next).css("left","-296px").animate({left:0},500)
                contentBox.eq(now).animate({left:296},500)
                spots.removeClass("hot").eq(next).addClass("hot")
                now=next
            }
        }
        btnl.click(function () {
            move("left")
        })
        btnr.click(function () {
            move("right")
        })
        spots.click(function () {
            console.log($(this).index());
            if($(this).index()==now){
                return
            }else if($(this).index()>now){
                contentBox.eq($(this).index()).css("left","296px").animate({left:0},500)
                contentBox.eq(now).animate({left:-296},500)
                spots.removeClass("hot").eq($(this).index()).addClass("hot")
                now=next=$(this).index()
            }else {
                contentBox.eq($(this).index()).css("left","-296px").animate({left:0},500)
                contentBox.eq(now).animate({left:296},500)
                spots.removeClass("hot").eq($(this).index()).addClass("hot")
                now=next=$(this).index()
            }
        })
    }

    for(let i=0;i<4;i++){
        let now=next=0
        lbt(i,now,next)
    }

    /////////////////////右侧客服////////////////////////////////////


    $(window).scroll(function(){
        let $scroll = $(document).scrollTop();
        if($scroll+600>=$(".end").offset().top){
            $("#header").css("display","block")
        }else{
            $("#header").css("display","none")
        }
    })


})