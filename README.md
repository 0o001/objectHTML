# objectHTML
HTML with javascript object or json

```js

window.onload = () => {

	document.open();
	objectHTML({
		html: {
			//from default/head.js
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
			//from default/footer.js
			footer: footer
			}
		}
	});

}

```

![Screenshot](https://github.com/mustafauzun0/objectHTML/blob/master/screenshots/objectHTML.png)
