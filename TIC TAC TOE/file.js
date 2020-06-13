var ct = 0,
    value, player;
if (!(ct % 2)) {
    value = 'X';
    player = 1;
} else {
    value = 'O';
    player = 2;
}
//alert(value);
function win() {
    if ((($('#1').text() === value) && ($('#2').text() === value) && ($('#3').text() === value)) || (($('#4').text() === value) && ($('#5').text() === value) && ($('#6').text() === value)) || (($('#7').text() === value) && ($('#8').text() === value) && ($('#9').text() === value))) //horizontal win
    {
        alert(value);
        return;
    }
    if ((($('#1').text() === value) && ($('#4').text() === value) && ($('#7').text() === value)) || (($('#2').text() === value) && ($('#5').text() === value) && ($('#8').text() === value)) || (($('#3').text() === value) && ($('#6').text() === value) && ($('#9').text() === value))) //vertical win
    {
        alert(value);
        return;
    }
    if ((($('#1').text() === value) && ($('#5').text() === value) && ($('#9').text() === value)) || (($('#3').text() === value) && ($('#5').text() === value) && ($('#7').text() === value))) //diagonal win
    {
        alert(value);
        return;
    }
    if (ct === 8) {
        alert("Draw");
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
        var x = $(this).text();
        if (x === "X" || x === "O") {
            alert("Position Already Occupied");
            return;
        } else
            $(this).text(value);
        win();
        ct++;
    });
    $("button").mouseover(function () {
        $(this).css("background", "red");
    });
    $("button").mouseout(function () {
        $(this).css("background", "gray");
    });
})