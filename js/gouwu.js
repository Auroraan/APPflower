/**
 * Created by ASUS on 2018/7/31.
 */
$(function(){
    var jian=$(".jian");
    var num=$(".num");
    var jia=$(".jia");
    var dan_jia=$(".dan_jia");
    var price=dan_jia.html();//������Զ��188.0�������console.log(price);�����ʾ����188
    var xuan=$(".xuanze");
    var zongjia=$("#zong_jia");
    var quanxuan=$("#quanxuan");
    var deleteone =$(".delete");
    /*// �Ӽ��仯���� û�����������������ȡ�������ʱ��������ӦԪ��
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
        //��Ԫ������html��ֵ ֱ�Ӹ�ֵ $(this).prevAll().eq(0).html(numjia);
        var numjia=$(this).prevAll().eq(0).html();
        numjia++;
        $(this).prevAll().eq(0).html(numjia);
        numjia=0;
    });*/
    /*console.log(jian);//012��Ҫ����Ԫ��  -- each*/
    jian.each(function (index){
        jian.eq(index).on("click",function(){
            var jiannum=num.eq(index).html();
            jiannum--;
            if(jiannum<1){
                jiannum=1;
            }
            num.eq(index).html(jiannum);
            //idֻ�ܶ���һ��Ԫ�أ���class���Զ�����
            dan_jia.eq(index).html(price*jiannum);
            totleprice();
        })
    });
    jia.each(function(index){
            /* console.log(index);//012*/
            jia.eq(index).on("click",function(){
                /*console.log(index);//  !!!����ĸ���index����ʾ�ĸ�������*/
                var jianum=num.eq(index).html();
                jianum++;
                num.eq(index).html(jianum);
                dan_jia.eq(index).html(price*jianum);
                totleprice();
            });
        });
    xuan.on("click",function(){
            //���input��ť��ʱ�����¼����ܼ�
              totleprice();
         });
    function totleprice(){
        var xiaoji= 0;
        xuan.each(function (index) {
               //�ж�ÿ����Ʒ��û�б�ѡ�񣬼�ÿ��ѡ���˵�С�ƣ�����ֵ���ܼ�
                if (xuan.eq(index).prop("checked")) {
                    xiaoji +=parseInt( dan_jia.eq(index).html());
                   /* console.log(dan_jia.eq(index).html())*/
                }
                zongjia.html(xiaoji);
        })
    }
    //ȫѡ
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