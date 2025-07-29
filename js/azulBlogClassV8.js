let footTest = {
    parObj: {
        typ: 'p',
        textContent: 'Footer Blog Test',
        style: {
            margin: '10px',
        },
    },
	rend(root) {
		let txtel = azul.addElement(this.parObj);
		root.appendChild(txtel);
		return root;
	},
};

let footTestObj = new AzulBlog(footTest, blogFooter.fbut4);
footTestObj.render();

let footTerms = {
    parObj: {
        typ: 'p',
        textContent: 'Terms',
        style: {
            margin: '10px',
        },
    },
	rend(root) {
		let txtel = azul.addElement(this.parObj);
		root.appendChild(txtel);
 		return root;
	},
};

let footTermsObj = new AzulBlog(footTerms, blogFooter.fbut2);
footTermsObj.render();

let footPriv = {
    parObj: {
        typ: 'p',
        textContent: 'Privacy',
        style: {
            margin: '10px',
        },
    },
	rend(root) {
		let txtel = azul.addElement(this.parObj);
		root.appendChild(txtel);
 		return root;
	},
};
let footPrivObj = new AzulBlog(footPriv, blogFooter.fbut1);
footPrivObj.render();


let footDir = {
    parObj: {
		typ: 'p',
		textContent: 'Directions',
		style: {
			margin: '10px',
		},
	},

	mapObj: {
        typ: 'iframe',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.905069193372!2d-0.37813978726809205!3d39.4714732714887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3b6f08f5d6fd4cb%3A0xb0879c53f0afe8b5!2sSpacesCabo%20Real%20Estate!5e0!3m2!1sen!2ses!4v1752602120370!5m2!1sen!2ses',
		height: '450',
        width: '600',
        style: {
            border: '0',
        },
        loading: 'lazy',
        referrerpolicy: 'no-referrer-when-downgrade',
    },
	rend(root) {
		let txtel = azul.addElement(this.parObj);
		root.appendChild(txtel);
        let map = azul.addElement(this.mapObj);
        root.appendChild(map); 
 		return root;
	},
};
let footDirObj = new AzulBlog(footDir, blogFooter.fbut3);
footDirObj.render();

let headServ = {
	parObj: {
        typ: 'p',
        textContent: 'Hello',
        style: {
            margin: '10px',
        },
    },
	rend(root) {
		let txtel = azul.addElement(this.parObj);
		root.appendChild(txtel);
 		return root;
	},
};


let headServObj = new AzulBlog(headServ, blogHeader.navBut2);
headServObj.render();

let headAbout = {
	parObj: {
        typ: 'p',
        textContent: 'Management',
        style: {
            margin: '10px',
        },
    },
	rend(root) {
		let txtel = azul.addElement(this.parObj);
		root.appendChild(txtel);
 		return root;
	},
};

let headAboutObj = new AzulBlog(headAbout, blogHeader.navBut1);
headAboutObj.render();
