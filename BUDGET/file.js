		var balance = 0;
		var amount, txt, checkBalance, expense = 0;
		var expense_balance = document.getElementById("expense_balance");
		var close = document.getElementsByClassName("delete");
		var edit = document.getElementsByClassName("edit");
		var account_balance = document.getElementById("balance");

		function addBalance() {
			console.log(document.getElementsByClassName("a"));
			amount = document.getElementById("income");
			if (amount.value == '') {
				return 0;
			}
			balance += parseInt(amount.value);
			account_balance.innerHTML = balance;
			amount.value = "";
		}

		function addExpense() {
			amount = document.getElementById("expense_amount");
			txt = document.getElementById("expense_text");
			if (amount.value == '' || txt.value == '') {
				amount.value = '';
				txt.value = '';
				return 0;
			}
			var element = document.createElement("li");
			element.innerHTML = `<span class="name">${txt.value}</span><span class="amt">${amount.value}$</span><span class="edit"><i class="fas fa-edit" aria-hidden="true"></i></span><span class="delete"><i class="fas fa-trash-alt" aria-hidden="true"></i></span>`;
			checkBalance = balance - amount.value;
			if (checkBalance < 0) {
				document.getElementById("wish_list").appendChild(element);
				document.querySelector("#show_2").style.display = "block";
			} else {
				balance = checkBalance;
				account_balance.innerHTML = balance;
				expense += parseInt(amount.value);
				expense_balance.innerHTML = expense;
				document.getElementById("expense_list").appendChild(element);
				document.querySelector("#show_1").style.display = "block";
			}
			amount.value = '';
			txt.value = '';
			for (i = 0; i < close.length; i++) {
				close[i].onclick = function () {
					var parent = this.parentElement;
					let add = parseInt(parent.childNodes[1].textContent);


					if (parent.parentElement.className == 'a') {
						balance += add;
						account_balance.innerHTML = balance;
						expense -= add;
						expense_balance.innerHTML = expense;
						parent.parentElement.removeChild(parent);
					}

				}
			}
			for (i = 0; i < edit.length; i++) {
				edit[i].onclick = function () {
					var parent = this.parentElement;
					var a = parent.childNodes[0].textContent;
					var b = parseInt(parent.childNodes[1].textContent);
					txt.value = a;
					amount.value = b;
					if (parent.parentElement.className == 'a') {
						var rec = parseInt(parent.childNodes[1].textContent);
						balance += rec;
						expense -= rec;
						expense_balance.innerHTML = expense;
						account_balance.innerHTML = balance;
					}

					parent.parentElement.removeChild(parent);

				}
			}
		}

		function addWishlist() {
			amount = document.getElementById("wish_amount");
			txt = document.getElementById("wish_text");
			if (amount.value == '' || txt.value == '') {
				amount.value = '';
				txt.value = '';
				return 0;
			}
			var element = document.createElement("li");
			element.innerHTML = `<span class="name">${txt.value}</span><span class="amt">${amount.value}$</span><span class="edit"><i class="fas fa-edit" aria-hidden="true"></i></span><span class="delete"><i class="fas fa-trash-alt" aria-hidden="true"></i></span>`;
			document.getElementById("wish_list").appendChild(element);
			amount.value = '';
			document.querySelector("#show_2").style.display = "block";
			txt.value = '';
			for (i = 0; i < close.length; i++) {
				close[i].onclick = function () {
					let parent = this.parentElement;
					parent.parentElement.removeChild(parent);
				}
			}
			for (i = 0; i < edit.length; i++) {
				edit[i].onclick = function () {
					var parent = this.parentElement;
					var a = parent.childNodes[0].textContent;
					var b = parseInt(parent.childNodes[1].textContent);
					txt.value = a;
					amount.value = b;
					parent.parentElement.removeChild(parent);

				}

			}

		}
		const ul_1 = document.querySelector('#wish_list')
		const ul_2 = document.querySelector("#expense_list");
		if (ul_1.children.length === 0) {
			ul_1.innerHTML = '';
			document.querySelector("#show_1").style.display = "none";
		}
		if (ul_2.children.length === 0) {
			ul_2.innerHTML = '';
			document.querySelector("#show_2").style.display = "none";
		}