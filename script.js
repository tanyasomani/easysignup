    //collect form data in JavaScript variables  
    function validation()
    {
      var name1 = document.getElementById("fname").value;  
      var name2 = document.getElementById("email").value;  
      var name3 = document.getElementById("psw").value;  
      var name4 = document.getElementById("psw2").value;  

      if(name1 == "")
      {
        document.getElementById('username').innerHTML="Please fill the name";
        return false;
      }

      if(name1.length <=2 )
      {
        document.getElementById('username').innerHTML="Name is too short";
        return false;
      }
      
      if(!isNaN(name1))
      {
        document.getElementById('username').innerHTML="Only characters are allowed";
        return false;
      }

      if(name1!="" && name1.length>2 && isNaN(name1))
      {
        document.getElementById('username').innerHTML="";
       
      }

      if(name2 == "")
      {
        document.getElementById('emailerror').innerHTML="Please fill the email";
        return false;
      }

      if(!(name2.indexOf('@')>=0 && name2.indexOf('@')<=name2.length))
      {
        document.getElementById('emailerror').innerHTML="Invalid email";
        return false;
      }

      if(name2.indexOf('@')>=0 && name2.indexOf('@')<=name2.length)
      {
        document.getElementById('emailerror').innerHTML="";
      }

      if(name3 == "")
      {
        document.getElementById('passerror').innerHTML="Please fill the password";
        return false;
      }

      if((name3.length<=7) || (name3.length>20))
      {
        document.getElementById('passerror').innerHTML="Password length must be between 8 and 20";
        return false;
      }

      if((name3 != "") && name3.length>7 && name3.length<20)
      {
        document.getElementById('passerror').innerHTML=" ";
      }

      if(name4 == "")
      {
        document.getElementById('confpasserror').innerHTML="Please fill the password";
        return false;
      }

      if(name3!=name4)
      {
        document.getElementById('confpasserror').innerHTML="Passwords are not matching";
        return false;
      }

      if(name3==name4)
      {
        document.getElementById('confpasserror').innerHTML="";
      }

}


    




    
  




