window.onload = () => {

	document.open();
	objectHTML({
		html: {
			head: head,
			body: {
				button: {
					class: 'btn-default',
					DOM: {
						innerText: 'Click Me'
					},
					click: () => {
						alert("Clicked");
					}
				},
			footer: footer
			}
		}
	});

}