frm = document.getElementById('form1');
frm.addEventListener("submit", main);

function reduction(obja, frm) {
	obja[frm.id] = frm.value;
	return obja;
}

function main() {
	console.log(frm)
	var dat = [].reduce.call(frm, reduction, {});
	console.log(dat);

	$.ajax({
		url: "./main.php",
		method: "post",
		data: dat,
		success: function(resp) {
		 		console.log(resp);
		 		document.write("Thanks, Your response has been recorded");
		}
	});
}
