var objectHTML = function(object) {

	if(!object instanceof Object) {

		throw new TypeError('is not Object');

	}

	createHTML(object);

	function createHTML(object, parent) {
		parent = parent || document;

		for(let key in object) {

			if(object[key] instanceof Function) {

				parent.addEventListener(key, object[key]);

			} else if(object[key] instanceof Object) {

				if(key == 'DOM') {

					for(let dom in object[key]) {

						parent[dom] = object[key][dom];

					}

					continue;
					
				}

				let child = document.createElement(key);
				parent.appendChild(child);
				createHTML(object[key], child);

			} else {

				parent.setAttribute(key, object[key]);

			}

		}
	}
}