/**
 * Created by Administrator on 2018/7/31.
 */
/*$(".footer_img>div").bind("click",function(){
    console.log($(this));
    $(this).find(".textinfo").css("color","red");
})*/
$(function(){
    var timer;
    var count=0;
    var imgblock=$(".banner2_ul");
    var dian=$(".dian");
    dian.first().css("backgroundColor","red");
    // touch  start move  end
    var startx=0;
    var stary=0;
    var endx=0;
    var endy=0;
    timer=setInterval(function(){
        show("left");
    },3000);
    imgblock.on("touchstart",function(e){
        clearInterval(timer);
        startx= e.touches[0].pageX;
        starty= e.touches[0].pageY;
         }).on("touchmove",function(e){
        endx= e.touches[0].pageX;
        endy= e.touches[0].pageY;
         }).on("touchend",function(e){
        timer=setInterval(function(){
            show("left");
        },3000);
        /*console.log(startx-endx);*/
        if(endx-startx<0){
            show("left")
        }
        else{
            show("right");
        }
        endx=0;
    });
    function show(res){
       if(res=="left"){
           count++;
           dian.eq(count).siblings().css("backgroundColor","");
           dian.eq(count).css("backgroundColor","red");
           if(count>2){
                   count=0;
                   imgblock.css("marginLeft",0+"px");
                       }
           imgblock.css("marginLeft",(-320*count)+"px");
                       }
        else{
           count--;
           dian.eq(count).siblings().css("backgroundColor","");
           dian.eq(count).css("backgroundColor","red");
           if(count<0){
                   count=2;
                   imgblock.css("marginLeft",(-960)+"px");
                       }
           imgblock.css("marginLeft",(-320*(count))+"px");
           }
                        }
});
window.onload=int;
function int(){
    var search=document.getElementsByClassName("img_input")[0];
    search.onclick=function(){
        this.value="";
    };
    var text=document.getElementsByClassName("showtext")[0];
    text.onclick=function(){
        console.log(this);
        this.innerHTML="一句话说明店铺公告。";
        this.style.color="black";
    };
        var title=document.getElementsByClassName("title")[0];
        window.addEventListener("scroll",function(){
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
       /* console.log(scrollTop);*/
        if(scrollTop>100){
            title.style.backgroundColor="rgba(255, 0, 0, 0.36)";
        }
        else{
            title.style.backgroundColor="red";
        }
    },true)
}
