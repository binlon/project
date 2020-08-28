
//选项卡
var titles = Array.from(document.querySelectorAll(".pnheader li"));
var contents = Array.from(document.querySelectorAll(".content div"));
 // 绑定事件
 titles.forEach(function(value, index) {
     // 添加鼠标进入事件
     value.onmouseenter = function() {
         // 1 标题变化
         // 标题中的排他
         titles.forEach(function(value) {
             // 这里的value是titles中的每一个元素 也就是标题div
             value.className = "";
         });
         // 标题中只给自己添加独特的样式
         titles[index].className = " active1"

         // 2 内容变化
         // 内容排他
         contents.forEach(function(value) {
             value.className = "";
         });
         // 内容只给自己添加独特的样式
         contents[index].className = "active1";
     }
 });
 //轮播图
 $(function () {
    // 获取元素
    var $box = $("#box");
    var $leftBtn = $("#leftBtn");
    var $rightBtn = $("#rightBtn");
    var $carousel = $("#carousel");

    var $cirs = $("#cirs div");

    // 获取第一个元素复制后放入最后
    $carousel.children("li:first-child").clone().appendTo($carousel);

    // 获取宽度
    var width = $box.width();
    // 定义信号量
    var idx = 0;

    $rightBtn.click(function () {
      idx++;
      $carousel.stop(true, true).animate({
        left: -idx * width
      }, 1000, "linear", function () {
        if (idx >= 6) {
          $(this).css("left", 0);
          idx = 0;
        }
        change();
      });
    });



    $leftBtn.click(function () {
      idx--;
      if (idx < 0) {
        idx = 6;
        $carousel.css("left", -idx * width);
        idx--
      }
      $carousel.stop().animate({ left: -idx * width }, 1000, function () {
        change()
      });
    })
    // 2 循环绑定事件  利用的是作用域分隔的原理 
    $cirs.each(function (index, value) {
      // 该循环的函数第一个参数是循环的目标的索引  第二个才是成员
      $(value).click(function () {
        if (index === idx) {
          return;
        }
        idx = index;
        $carousel.animate({ left: -index * width }, 1000, function () {
          change();
        })
      });
    });

    // 小圆点的样式 
    function change() {
      $cirs.each(function (index, value) {
        if (index === idx) {
          $(value).addClass("active");
        } else {
          $(value).removeClass("active");
        }
      })
    }



    var timer = setInterval(function () {
      $rightBtn.trigger("click");
    }, 3000)


    $box.mouseenter(function () {
      clearInterval(timer);
    });

    $box.mouseleave(function () {
      timer = setInterval(function () {
        $rightBtn.trigger("click");
      }, 3000);
    });
  });
  var btn = document.getElementById("btn");
  btn.onmousedown = function(){
    location = "../html/shop.html";
  }
  var login = document.getElementById("login");
  login.onmousedown = function(){
    location = "../html/login.html";
  }
  var liBox = document.querySelector(".liBox");
  var title = Array.from(document.querySelectorAll(".nav li"));
  var content = Array.from(document.querySelectorAll(".liBox div"));
   // 绑定事件
  var isdown = true;
   title.forEach(function(value, index) {
       // 添加鼠标进入事件
       value.onmousedown = function() {
           // 内容变化
           // 内容排他
           if(isdown){
         liBox.style.height = "300px";}
         else{
            liBox.style.height = "0";
         }
         isdown = !isdown;

           content.forEach(function(value) {
               value.className = "";
           });
           // 内容只给自己添加独特的样式
           content[index].className = "active1";
       }
   });