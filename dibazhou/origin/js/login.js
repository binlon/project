var login = document.getElementById("login");
  login.onmousedown = function(){
    location = "../html/login.html";
  }
  
  var liBox = document.querySelector(".liBox");
  var titles = Array.from(document.querySelectorAll(".nav li"));
  var contents = Array.from(document.querySelectorAll(".liBox div"));
   // 绑定事件
  var isdown = true;
   titles.forEach(function(value, index) {
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

           contents.forEach(function(value) {
               value.className = "";
           });
           // 内容只给自己添加独特的样式
           contents[index].className = "active";
       }
   });
   
    
    var tip1 = document.getElementById("tip1");
    console.log(tip1);
    var tip2 = document.getElementById("tip2");
    console.log(tip2)
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var btn1 = document.getElementById("btn1");
    var user_lock = false;
    var password_lock = false;
    var reg1 = /^[\D][a-zA-Z0-9_-]{4,16}$/;
   
    var reg2 = /^[\D][a-zA-Z0-9_-]{8,16}$/;
    username.onblur = function(e){
        e.stopPropagation(); 
        var val1 = username.value;
        console.log(val1);
        
        if(!reg1.test(val1)){
            tip1.style.display = "block" 
        }
       else{
           user_lock = true;
          
       }
       
    }
    password.onblur = function(e){
        e.stopPropagation(); 
        var val2 = password.value;
        console.log(val2)
        if(!reg2.test(val2)){
            tip2.style.display = "block";
        }
        else{
            password_lock = true;
           
        }
    }
    document.onmousedown = function(){
        tip1.style.display = "none";
        tip2.style.display = "none";
      
    }
    console.log(user_lock)
    console.log(password_lock)
   if(user_lock===true&&password_lock===true){
       btn1.onmousedown = function(){
           window.location.href = "../html/index.html";
       }
   }
    