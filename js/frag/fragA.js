// test fragment A
//

let fragAObj = {

	titObj: {
        style: {
			color: 'blue',
			margin: 'auto',
			textAlign: 'center',
			fontSize: '2rem',
			padding: '0.5em',
        },
        textContent: 'FragA Title',
        typ: 'h2',
	},

	rend() {
		const frag = document.createElement('div');
		const ftit = azul.addElement(this.titObj);
		frag.appendChild(ftit);
		return frag;
	},
};

let azulFragA = new AzulFrag(fragAObj, blogHeader.navBut2);
azulFragA.render();

