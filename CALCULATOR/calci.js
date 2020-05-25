function insert(num){
document.form.textview.value=document.form.textview.value+num;
}

function equal(){
var exp=document.form.textview.value;
var a=0,b=0;
    for(var i=0;i<exp.length;i++){
                 if(exp[i]==='(')
                     a++;
                 else if(exp[i]===')')
                     b++;  
             }
             while(a>b){                 document.form.textview.value=document.form.textview.value+')';
                        b++;
            }
           if(exp){
           document.form.textview.value=eval(exp).toFixed(2);
           }
}
function negative(){
	var exp=document.form.textview.value;
if(exp){
document.form.textview.value=-1*eval(exp);
}
}
function empty(){
document.form.textview.value="";
}

function back(){
var exp = document.form.textview.value;
document.form.textview.value=exp.substring(0,exp.length-1);
}
function display(){
	var i=1;
	for(i=0;i<=5;i++){
		if(document.getElementById("hidden"+i).style.display==="none"){           document.getElementById("textview").style.width="275px"; document.getElementById("hidden"+i).style.display="contents";}
		else{ document.getElementById("hidden"+i).style.display="none";       document.getElementById("textview").style.width="200px";
            }
	}
}
function Double(){
    var exp=document.form.textview.value;
if(exp){
document.form.textview.value=eval(exp)*eval(exp);
}
}
function Sine(){
    var exp=document.form.textview.value;
    if(exp){    document.form.textview.value=Math.sin(eval(exp)).toFixed(2);
    }//if value is given earlier
    else{
        document.form.textview.value='Math.sin(';
    }//if value is entered after
}
function Cosine(){
    var exp=document.form.textview.value;
    if(exp){    document.form.textview.value=Math.cos(eval(exp)).toFixed(2);
    }//if value is given earlier
    else{
        document.form.textview.value='Math.cos(';
    }//if value is entered after
}
function Tangent(){
     var exp=document.form.textview.value;
    if(exp){    document.form.textview.value=Math.tan(eval(exp)).toFixed(2);
    }//if value is given earlier
    else{
        document.form.textview.value='Math.tan(';
    }//if value is entered after
}
function Exp(){
     var exp=document.form.textview.value;
    if(exp){    document.form.textview.value=Math.exp(eval(exp)).toFixed(2);
    }//if value is given earlier
    else{
        document.form.textview.value='Math.exp(';
    }//if value is entered after
}

function Log(){
     var exp=document.form.textview.value;
    if(exp){    document.form.textview.value=Math.log10(eval(exp)).toFixed(2);
    }//if value is given earlier
    else{
        document.form.textview.value='Math.log10(';
    }//if value is entered after
}
function fact(){
    var exp=document.form.textview.value;
    var a=Number(exp);
    var m=1;
    for(var i=1;i<=a;i++){
        m*=i;
    }
    document.form.textview.value=m;
    
}
function LN(){
    var exp=document.form.textview.value;
    if(exp){    document.form.textview.value=Math.log10(eval(exp)).toFixed(2);
    }//if value is given earlier
    else{
    document.form.textview.value+='Math.log(';
    }
}
function SQRT(){
    var exp=document.form.textview.value;
    if(exp){    document.form.textview.value=Math.sqrt(eval(exp)).toFixed(2);
    }//if value is given earlier
    else{
    document.form.textview.value+='Math.sqrt(';
    }
}

function bracket(){
    var exp=document.form.textview.value;
    var a=0,b=0;
    if(exp.includes('(')){                
        if(exp[exp.length-1]==='('){
            document.form.textview.value=document.form.textview.value+'(';
         }
      else{
             for(var i=0;i<exp.length;i++){
                 if(exp[i]==='(')
                     a++;
                 else if(exp[i]===')')
                     b++;  
             }
             
             if(a>b)                 document.form.textview.value=document.form.textview.value+')';
             else                 document.form.textview.value=document.form.textview.value+'(';
      }
    }
    else{
        document.form.textview.value=document.form.textview.value+'(';
    }
}
