document.getElementById("btn_cont").addEventListener("click", cont);

function cont() {
	let choose_number = Number(document.getElementById("select_number").value);

	let starting_number = Number(document.getElementById("number_initial").value);

	let final_number = Number(document.getElementById("end_number").value);

	let qtd = 0;

	for (let i = starting_number; i <= final_number; i++) {
		let indexString = i.toString();

		for (let j = 0; j < indexString.length; j++) {
			if (indexString[j] == choose_number) {
				qtd++;
			}
		}
	}

	if (qtd == 0) {
		document.getElementById("total").value =
			"Nenhuma vez o número " + choose_number;
	}
	else if (qtd == 1) {
		document.getElementById("total").value =
			qtd + " vez o número " + choose_number;
	} else {
		document.getElementById("total").value =
			qtd + " vezes o número " + choose_number;
	}
}
