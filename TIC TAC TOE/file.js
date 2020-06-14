var ct = 0,value, player;
if (!(ct % 2)) {
    value = 'X';
    player = 1;
} 
else {
    value = 'O';
    player = 2;
}
//alert(value);
function win() {
    if ((($('#a').text() === value) && ($('#b').text() === value) && ($('#c').text() === value)) || (($('#d').text() === value) && ($('#e').text() === value) && ($('#f').text() === value)) || (($('#g').text() === value) && ($('#h').text() === value) && ($('#i').text() === value))) //horizontal win
    {
        $(".result").show(5000);
        $("#res_ult").text("Player "+player+" Wins");
        $("#res").text("Play Again");
        $("button").attr("disabled","true"); document.getElementById("res").disabled = false;        
        return;
    }
    if ((($('#a').text() === value) && ($('#d').text() === value) && ($('#g').text() === value)) || (($('#b').text() === value) && ($('#e').text() === value) && ($('#h').text() === value)) || (($('#c').text() === value) && ($('#f').text() === value) && ($('#i').text() === value))) //vertical win
    {
        $(".result").show(3000);
        $("#res_ult").text("Player "+player+" Wins");
        $("#res").text("Play Again");
        $("button").attr("disabled","true"); document.getElementById("res").disabled = false;        
        return;
    }
    if ((($('#a').text() === value) && ($('#e').text() === value) && ($('#i').text() === value)) || (($('#c').text() === value) && ($('#e').text() === value) && ($('#g').text() === value))) //diagonal win
    {
        $(".result").show(3000);
        $("#res_ult").text("Player "+player+" Wins");
        $("#res").text("Play Again");
        $("button").attr("disabled","true"); document.getElementById("res").disabled = false;        
        return;
    }
    if (ct === 8) {
        $(".result").show(3000);
        $("#res_ult").text("Match Draw");
        $("#res").text("Play Again");
        $("button").attr("disabled","true"); document.getElementById("res").disabled = false;        
        return;
    }
}
$(document).ready(function () {
    $("button").click(function () {
        if (!(ct % 2)) {
            value = 'X';
            player = 1;
        } else {
            value = 'O';
            player = 2;
        }
        var x = $(this).attr("class");
        if (x === "done") {
            alert("Position Already Occupied");
            return;
        } else {
            $(this).text(value);
            $(this).attr("class", "done");
        }
        win();
        ct++;
    });
    $("button").mouseover(function () {
        if (!(ct % 2)) {
            value = 'X';
            player = 1;
        } else {
            value = 'O';
            player = 2;
        }
        if ((!($(this).attr("class") === "done"))&&(!($(this).attr("id") === "res")))
            $(this).text(value);
    });
    $("button").mouseout(function () {
        if ((!($(this).attr("class") === "done"))&&(!($(this).attr("id") === "res")))
        $(this).text('');
    });
    $("#res").click(function () {
    $(".done").text("");
    $(".done").attr("class", "");
    //$("button").attr("disabled","false");
    $('button').prop('disabled', false);
    $(".result").hide(2000);
        ct=0;
    $(this).text("");
    });
})