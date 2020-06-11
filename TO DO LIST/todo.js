//Put a cross button on evry item in a list
var arr = document.getElementsByClassName("active");
for (var i = 0; i < arr.length; i++) {
    var span = document.createElement('span');
    var txt = document.createTextNode('X');
    span.className = "close";
    span.appendChild(txt);
    arr[i].appendChild(span);
}
//Function of close button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        var complete = document.createElement('done');
        var txt = div.firstChild;
        complete.appendChild(txt);
        document.getElementById('completed').appendChild(complete);
        div.style.display = "none";
    }
}

function appear() {
    if (document.getElementById('ip').style.display === "none") {
        document.getElementById('ip').style.display = "block";
    } else {
        newElement();
    }
}

function see() {
    if (document.getElementById('active').style.display === "none") {
        document.getElementById('active').style.display = "block";
        document.getElementById('completed').style.display = "none"
    } else {
        {
            document.getElementById('active').style.display = "none";
            document.getElementById('completed').style.display = "block"
        }
    }
}

function newElement() {
    var element = document.createElement('li');
    var value = document.getElementById('ip').value;
    var txt = document.createTextNode(value);
    element.appendChild(txt);
    if (value === '') {
        alert('You must write something');
    } else {
        var x = document.getElementById('active');
        x.appendChild(element);
    }
    document.getElementById('ip').value = "";

    var span = document.createElement('span');
    var txt = document.createTextNode('X');
    span.className = "close";
    span.appendChild(txt);
    element.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            var complete = document.createElement('done');
            var txt = div.firstChild;
            complete.appendChild(txt);
            document.getElementById('completed').appendChild(complete);
            div.style.display = "none";
            div.style.display = "none";
        }
    }
}