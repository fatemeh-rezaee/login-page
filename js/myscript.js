$(document).ready(function(){
    $("#submit").click(function(){
         var name =$("#name").val();
         var email =$("#email").val();
         var pass =$("#password").val();
          if(name.length == ""){
            $("#warning1").text("please inter your Name!");
            $("#name").focus();
            return false;
          }
          else if(email.length == ""){
            $("#warning2").text("please inter your email address!");
            $("#email").focus();
            return false;
          }
          else if(pass.length == ""){
            $("#warning3").text("please inter your password");
            $("#password").focus();
            return false;
          }
        else{
            var con = confirm("Are you Done?");
            if(con==true){
                alert("Welcome to our Website");
                return true;
            }
            else{
                return false;
            }
        }
    })
})