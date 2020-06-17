 var arr = [],
     num = 3;
 window.onload = function () {
     for (var i = 0; i < num; i++) {
         var b = String.fromCharCode(97 + i);
         $("#" + b).css("background", random());
     }
     array();
 };
 $(document).ready(function () {
     $("#easy").click(function () {
         num = 3;
         $(".a2").fadeOut(3000);
         $(".a3").fadeOut(3000);
     });
     $("#medium").click(function () {
         num = 6;
         $(".a2").fadeIn(3000);
         $(".a3").fadeOut(3000);
     });
     $("#hard").click(function () {
         num = 9;
         $(".a2").fadeIn(3000);
         $(".a3").fadeIn(3000);
     });
     $("button").click(function () {
         for (var i = 0; i < num; i++) {
             var b = String.fromCharCode(97 + i);
             $("#" + b).css("background", random());
         }
         array();
     });
     $(".s").click(function () {
         var txt = $(".rgb").text();
         if ($(this).css("background-color") === txt) {
             $(".s").css("background", txt);
             $(".result").text("Good Job");
         } else {
             $(this).css("background", "inherit");
             $(".result").text("Try Again");
         }

     });
 });

 function array() {
     for (var i = 0; i < num; i++) {
         var b = String.fromCharCode(97 + i);
         arr[i] = $("#" + b).css("background-color");
     }
     var color_num = Math.floor(Math.random() * num);
     $(".rgb").text("RGB Code: "+arr[color_num]);
     $(".hex").text("Hex Code: "+change(arr[color_num]));
 }

 function random() {
     var r = Math.floor(Math.random() * 256);
     var g = Math.floor(Math.random() * 256);
     var b = Math.floor(Math.random() * 256);
     return "rgb(" + r + "," + g + "," + b + ")";
 }

 function change(col) {
     var a = col.split("(")[1].split(")")[0].split(",");
     var r = a[0],
         g = a[1],
         b = a[2];
     return hex((parseInt(r)), (parseInt(g)), (parseInt(b)));
 }

 function hex(r, g, b) {
     return "#" + convert(r) + convert(g) + convert(b);
 }

 function convert(col_or) {
     var hex = col_or.toString(16);
     return hex.length == 1 ? "0" + hex : hex;
 }