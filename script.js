var init = () => {
	document.getElementById("button").addEventListener(
		"click",
		function (event) {
			event.preventDefault();
			document.getElementById("message").value = Array(10)
				.fill(
					"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
				)
				.map(function (x) {
					return x[Math.floor(Math.random() * x.length)];
				})
				.join("");
		},
		true
	);
};
