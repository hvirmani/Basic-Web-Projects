function clock(){
				var hour=document.getElementById('hour');
				var minute=document.getElementById('minutes');
				var second=document.getElementById('seconds');
				var h=new Date().getHours();
				var m=new Date().getMinutes();
				var s=new Date().getSeconds();	
				if(h<10)
                 hour.innerHTML='0'+h;
                else
                 hour.innerHTML=h;
                if(m<10)
                 minute.innerHTML='0'+m;
                else
                 minute.innerHTML=m;
                if(s<10)
                 second.innerHTML='0'+s;
                else
                 second.innerHTML=s;
			}
var interval=setInterval(clock,1000);