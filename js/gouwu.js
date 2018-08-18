/**
 * Created by ASUS on 2018/7/31.
 */
$(function(){
    var jian=$(".jian");
    var num=$(".num");
    var jia=$(".jia");
    var dan_jia=$(".dan_jia");
    var price=dan_jia.html();//单价永远是188.0，不会变console.log(price);输出显示老是188
    var xuan=$(".xuanze");
    var zongjia=$("#zong_jia");
    var quanxuan=$("#quanxuan");
    var deleteone =$(".delete");
    /*// 加减变化代码 没有用索引，不方便获取点击本行时的其他对应元素
    jian.on("click",function(){
           var numjian=$(this).nextAll().eq(0).html();
           numjian--;
           if(numjian<1){
               numjian=1;
           }
           $(this).nextAll().eq(0).html(numjian);
           numjian=0;
       });
    jia.on("click",function(){
        console.log($(this).prevAll().eq(0));
        //给元素属性html赋值 直接赋值 $(this).prevAll().eq(0).html(numjia);
        var numjia=$(this).prevAll().eq(0).html();
        numjia++;
        $(this).prevAll().eq(0).html(numjia);
        numjia=0;
    });*/
    /*console.log(jian);//012需要遍历元素  -- each*/
    jian.each(function (index){
        jian.eq(index).on("click",function(){
            var jiannum=num.eq(index).html();
            jiannum--;
            if(jiannum<1){
                jiannum=1;
            }
            num.eq(index).html(jiannum);
            //id只能定义一个元素，而class可以定义多个
            dan_jia.eq(index).html(price*jiannum);
            totleprice();
        })
    });
    jia.each(function(index){
            /* console.log(index);//012*/
            jia.eq(index).on("click",function(){
                /*console.log(index);//  !!!点击哪个，index就显示哪个的索引*/
                var jianum=num.eq(index).html();
                jianum++;
                num.eq(index).html(jianum);
                dan_jia.eq(index).html(price*jianum);
                totleprice();
            });
        });
    xuan.on("click",function(){
            //点击input按钮的时候，重新计算总价
              totleprice();
         });
    function totleprice(){
        var xiaoji= 0;
        xuan.each(function (index) {
               //判断每个商品有没有被选择，加每个选择了的小计，并赋值给总价
                if (xuan.eq(index).prop("checked")) {
                    xiaoji +=parseInt( dan_jia.eq(index).html());
                   /* console.log(dan_jia.eq(index).html())*/
                }
                zongjia.html(xiaoji);
        })
    }
    //全选
    quanxuan.click(function(){
        xiaoji=0;
        if($(this).prop("checked")){
            xuan.each(function(index){
                xuan.eq(index).prop("checked",true);
                xiaoji +=parseInt( dan_jia.eq(index).html());
                zongjia.html(xiaoji);
            });
        }
        else{
            xuan.each(function(index){
                xuan.eq(index).prop("checked",false)
            });
            zongjia.html("0");
        }
    });
    deleteone.each(function(index){
        deleteone.eq(index).click(function(){
            $(this).parent().remove();
            show(index);
        });
    });
    function show(index){
        console.log(index);
        if(index==2){
            var text=$("<div></div>");
            text.css({
                width:"100",
                height:"100",
                marginLeft:"130px",
                marginTop:"150px"
            });
            text.html("All empty");
            $(".block").append(text);

        }
    }

});