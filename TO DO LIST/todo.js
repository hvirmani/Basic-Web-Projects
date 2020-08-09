var close = document.getElementsByClassName("close");
var check = document.getElementsByClassName("check");
var k = 0;

function newTask() {
	var input = document.getElementById("text").value;
	var txt = document.createTextNode(input);
	//console.log(txt);
	var li = document.createElement("li");
	li.className = "active";
	var element = `<span class="data"></span><span class="check"><i class="fa fa-check" ></i></span><span class="close"><i class="fas fa-trash-alt" ></i></span>`;
	var a = document.getElementsByClassName("data");

	li.innerHTML = element;
	if (input === '') {
		alert("You must write something");
	} else {
		document.getElementById('active').appendChild(li);
		//document.getElementById("data").appendChild(txt);
	}
	a[k].appendChild(txt);
	k++;
	//console.log(a[0].innerHTML);
	document.getElementById('text').value = "";
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var parent = this.parentElement;
			parent.style.display = "none";
			parent.parentElement.removeChild(parent);
		}
	}
	for (i = 0; i < check.length; i++) {
		check[i].onclick = function () {
			var parent = this.parentElement;
			if (parent.className == "active") {
				document.getElementById("done").appendChild(parent);
				parent.className = "done";
			} else {
				document.getElementById("active").appendChild(parent);
				parent.className = "active";
			}
		}
	}
}
const ul_1 = document.querySelector('#active')
const ul_2 = document.querySelector("#done");
if (ul_1.children.length === 0)
	ul_1.innerHTML = '';
if (ul_2.children.length === 0)
	ul_2.innerHTML = '';