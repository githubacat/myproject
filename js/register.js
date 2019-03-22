
$("#btn").click(function(){
   var username = $("#username").val();
   var userpwd=$("#userpwd").val();
   var usertel =$("#usertel").val();
   $.ajax({
       type:"get",
       url:"../php/register.php",
       data:{
           username:username,
           userpwd:userpwd,
           usertel:usertel,
       },
       dataType:"json",
       success:function(obj){
           if(obj.code==1){
               window.location.href ="../html/login.html"
           }else{
               alert(obj.msg)
           }
       }
   }) 
})