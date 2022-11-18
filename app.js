
    alert("Try to use this site in Desktop Mode or Open this website on Desktops  Enjoy Your Game")

$(document).ready(function(){
    $("#btnStart").click(function(){
        $("#dis").css({'display':'none'});
        $("#game").css({'display':'block'});
    });
    $("#m1").click(function(){
        var a=Math.floor(Math.random()*3)+1;
        $("#o"+a).css({'paddingTop':'50px'});
        

         if(a==1)
        {
            $("#draw").css({'display':'block'});
            $("#win").css({'display':'none'});
            $("#lose").css({'display':'none'});
            $("#t1").css({'display':'block'});
            $("#t2").css({'display':'block'});
            



        }
        else if(a==3)
        {
            $("#draw").css({'display':'none'});
            $("#win").css({'display':'block'});
            $("#lose").css({'display':'none'});
            $("#t1").css({'display':'block'});
            $("#t2").css({'display':'block'});


        }
        else
        {
            $("#draw").css({'display':'none'});
            $("#win").css({'display':'none'});
            $("#lose").css({'display':'block'});
            $("#t1").css({'display':'block'});
            $("#t2").css({'display':'block'});


        }
    });
    $("#m2").click(function(){
        
        var a=Math.floor(Math.random()*3)+1;
        $("#o"+a).css({'paddingTop':'50px'});
        

         if(a==2)
        {
            $("#draw").css({'display':'block'});
            $("#win").css({'display':'none'});
            $("#lose").css({'display':'none'});
            $("#t1").css({'display':'block'});
            $("#t2").css({'display':'block'});
            



        }
        else if(a==1)
        {
            $("#draw").css({'display':'none'});
            $("#win").css({'display':'block'});
            $("#lose").css({'display':'none'});
            $("#t1").css({'display':'block'});
            $("#t2").css({'display':'block'});


        }
        else
        {
            $("#draw").css({'display':'none'});
            $("#win").css({'display':'none'});
            $("#lose").css({'display':'block'});
            $("#t1").css({'display':'block'});
            $("#t2").css({'display':'block'});


        }
    });
    $("#m3").click(function(){
        
        var a=Math.floor(Math.random()*3)+1;
        $("#o"+a).css({'paddingTop':'50px'});
        

         if(a==3)
        {
            $("#draw").css({'display':'block'});
            $("#win").css({'display':'none'});
            $("#lose").css({'display':'none'});
            $("#t1").css({'display':'block'});
            $("#t2").css({'display':'block'});
            



        }
        else if(a==2)
        {
            $("#draw").css({'display':'none'});
            $("#win").css({'display':'block'});
            $("#lose").css({'display':'none'});
            $("#t1").css({'display':'block'});
            $("#t2").css({'display':'block'});


        }
        else
        {
            $("#draw").css({'display':'none'});
            $("#win").css({'display':'none'});
            $("#lose").css({'display':'block'});
            $("#t1").css({'display':'block'});
            $("#t2").css({'display':'block'});


        }
    });
    $("#t1").click(function(){
        $("#t1").css({'display':'none'});
        $("#t2").css({'display':'none'});
        $("#win").css({'display':'none'});
        $("#lose").css({'display':'none'});
        $("#draw").css({'display':'none'});
        $("#o1").css({'paddingTop':'0px'});
        $("#o2").css({'paddingTop':'0px'});
        $("#o3").css({'paddingTop':'0px'});
    });
    $("#t2").click(function(){
        $("#t1").css({'display':'none'});
        $("#t2").css({'display':'none'});
        $("#win").css({'display':'none'});
        $("#lose").css({'display':'none'});
        $("#draw").css({'display':'none'});
        $("#o1").css({'paddingTop':'0px'});
        $("#o2").css({'paddingTop':'0px'});
        $("#o3").css({'paddingTop':'0px'});
        $("#game").css({'display':'none'});
        $("#dis").css({'display':'block'});

    });

});