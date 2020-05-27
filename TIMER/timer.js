var final_date =new Date("Jan 1, 2021 00:00:00").getTime();

    setInterval(function timer(){
    var current_date=new Date().getTime();
    var interval=final_date-current_date;
    var days=Math.floor(interval/(1000*24*60*60));
    var hours=Math.floor(interval%(1000*60*60*24)/(1000*60*60));
    var minutes=Math.floor(interval%(1000*60*60)/(1000*60));
    var seconds=Math.floor(interval%(1000*60)/1000);
    if(days<10&&days>0)   document.getElementById("days").innerHTML='0'+days; 
    else       document.getElementById("days").innerHTML=days;
    if(hours<10) document.getElementById("hours").innerHTML='0'+hours; 
    else document.getElementById("hours").innerHTML=hours;
    if(minutes<10)   document.getElementById("minutes").innerHTML='0'+minutes;
    else   document.getElementById("minutes").innerHTML=minutes; 
    if(seconds<10) document.getElementById("seconds").innerHTML='0'+seconds;
    else   document.getElementById("seconds").innerHTML=seconds;
    },1000);