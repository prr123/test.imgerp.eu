// v2: move code into functions
// v3: move header into obj
// v4 move section into obj
// V5: add section code for blog
// v6:
// V7: add footer4

function loadsection(url) {

    const ldscript = document.createElement('script');

    ldscript.src = url;
    ldscript.type = "application/javascript";
	ldscript.defer = true;

    ldscript.onload = () => {console.log('Script loaded successfully: ' + url);};

    ldscript.onerror = () => {
        console.log('Error occurred while loading script: ' + url);
    };

// inserting it will execute the script
//    document.body.appendChild(script);
}


let azulSPA = {
	hdStyl: {
	        color: 'MediumPurple',
    	    margin: 'auto',
	        textAlign: 'center',
			fontSize: '2rem',
	       	padding: '0.5em',
	},

	mainDiv: {
		style: {
			width: 'calc(100% - 300px)',
			border: '1px solid blue',
			minHeight: '300px',
        },
		id: 'divMain',
	},
	header: {
            style: {
                minHeight: '100px',
                margin: '10px',
                border: '1px solid DeepPink',
                position: 'relative',
            },
            id: 'header',
            className: 'pagSections',
	},
	section: {
            style: {
                minHeight: '500px',
                margin: '10px',
                border: '1px solid Tomato',
                position: 'relative',
            },
            id: 'docmain',
            className: 'pagSections',
	},
	footer: {
            style: {
                minHeight: '100px',
                margin: '10px',
                border: '1px solid green',
                position: 'relative',
            },
            id: 'footer',
            className: 'pagSections',
	},
};

azulSPA.getCont = function (e, url) {
	console.log('event:' + e.type + ' url:' + url);
};

let blogSection = {

    blogDivObj: {
        style: {
			width: '100%',
			margin: '10px',
            minHeight: '100px',
            marginInline: 'auto',
            border: '1px solid red',
        },
        id: 'blogDivH',
        typ: 'div',
    },

	blogTitle: {
        style: {
	        color: 'blue',
			margin: 'auto',
			textAlign: 'center',
			fontSize: '1.5rem',
			padding: '0.5em',
			},
        id: 'blogTitle',
        textContent: 'Azul Testing',
        typ: 'h3',
	},


	imgPDivObj: {
        style: {
//			minWidth: '600px',
			maxWidth: 'fit-content',
			minHeight: '100px',
			marginInline: 'auto',
			border: '1px dashed green',
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
		},
        id: 'imgPDiv',
        typ: 'div',
	},

	imgRDivObj: {
        style: {
			minWidth: '300px',
			maxWidth: 'fit-content',
			minHeight: '200px',
			margin: '10px',
			border: '1px dashed blue',
		},
        id: 'imgRDiv',
        typ: 'div',
	},

	imgLDivObj: {
        style: {
			minWidth: '300px',
			maxWidth: 'fit-content',
			minHeight: '200px',
			margin: '10px',
			border: '1px dashed blue',
		},
        id: 'imgLDiv',
        typ: 'div',
	},

    mdDivObj: {
        style: {
			width: '100%',
			margin: '10px',
            minHeight: '100px',
            marginInline: 'auto',
            border: '1px dashed purple',
        },
        id: 'mdDiv',
        typ: 'div',
    },

	init(par) {

		this.par = par;
		this.blogDivH = azul.addElement(this.blogDivObj);

    	const title = azul.addElement(this.blogTitle);
		this.blogDivH.appendChild(title);

		let imgPDiv = azul.addElement(this.imgPDivObj);
		let imgRDiv = azul.addElement(this.imgRDivObj);
		let imgLDiv = azul.addElement(this.imgLDivObj);
		imgPDiv.appendChild(imgLDiv);
		imgPDiv.appendChild(imgRDiv);
		this.blogDivH.appendChild(imgPDiv);

		let mdDiv = azul.addElement(this.mdDivObj);
		this.blogDivH.appendChild(mdDiv);
//		this.blogDivH = blogDivH;
		par.appendChild(this.blogDivH);
	},

	navfH() {
		let list = blogSection.par;
		while (list.hasChildNodes()) {
  			list.removeChild(list.firstChild);
		}
		list.appendChild(blogSection.blogDivH);
	},
};

let blogA = {
    blogDivObj: {
        style: {
			width: '100%',
			margin: '10px',
            minHeight: '100px',
            marginInline: 'auto',
            border: '1px solid green',
        },
        id: 'blogDivA',
        typ: 'div',
    },

	parObj: {
		typ: 'p',
		textContent: 'Hello',
		style: {
			margin: '10px',
		},
	},

	init(par) {
		this.par = par;
		this.blogDiv = azul.addElement(this.blogDivObj);
		let para = azul.addElement(this.parObj);
		this.blogDiv.appendChild(para);
	},

	navf1() {
		console.log('nav f1 click');

		let list = blogA.par;
		while (list.hasChildNodes()) {
  			list.removeChild(list.firstChild);
		}
		list.appendChild(blogA.blogDiv);
	},

};

let blogB = {
    blogDivObj: {
        style: {
			width: '100%',
			margin: '10px',
            minHeight: '100px',
            marginInline: 'auto',
            border: '1px dashed orange',
        },
        id: 'blogDivB',
        typ: 'div',
    },

	parObj: {
		typ: 'p',
		textContent: 'World',
		style: {
			margin: '10px',
		},
	},

	init(par) {
		this.par = par;
		this.blogDiv = azul.addElement(this.blogDivObj);
		let para = azul.addElement(this.parObj);
		this.blogDiv.appendChild(para);
	},

	navf2() {
		console.log('nav f2 click');

		let list = blogB.par;
		while (list.hasChildNodes()) {
  			list.removeChild(list.firstChild);
		}
		list.appendChild(blogB.blogDiv);
	},

};

let blogHeader = {

    hdObj: {
        style: {
	        color: 'MediumPurple',
    	    margin: 'auto',
	        textAlign: 'center',
			fontSize: '2rem',
	       	padding: '0.5em',
		},
        id: 'header',
        className: 'doch3',
        textContent: 'Valencia Blog',
        typ: 'h2',
    },

	menuIconObj: {
		size: '32',
		svgStyl: {
			position: 'absolute',
			top: '10px',
			right: '15px',
		},
		pStyl: {
			strokeWidth:'10',
        	strokeLinecap: 'round',
        	stroke: 'black',
        	fill : 'none',
		},
		pathstr: azul.icons.menu,
	},


    butNavObj: {
        style: {
	        background: 'none',
			border: 'none',
    	    padding: '0',
        	cursor: 'pointer',
		},
        typ: 'button',
    },

    menuInlineObj: {
        style: {
			display: 'flex',
			justifyContent: 'flex-end',
			border: '1px dashed green',
			width: '100%',
			minHeight: '30px',
			},
        id: 'inlineMenu',
        typ: 'div',
    },


	itemObj: {
		style: {
			border: '1px dashed orange',
			margin: '5px',
			minWidth: '100px',
			textAlign: 'center',
			},
		typ: 'div',
	},


	render(par) {
		const hdel = azul.addElement(this.hdObj);
		par.appendChild(hdel);
		let mic = azul.addIcon(this.menuIconObj);
		par.appendChild(mic);

		const butNavObj1 = {textContent: 'About Us'};
		Object.assign(butNavObj1, this.butNavObj);

	    let navBut1 = azul.addElement(butNavObj1);
		navBut1.addEventListener('click', blogA.navf1);

		const butNavObj2 = {textContent: 'Services'};
		Object.assign(butNavObj2, this.butNavObj);

	    let navBut2 = azul.addElement(butNavObj2);
		navBut2.addEventListener('click', blogB.navf2);

		const butHomeObj = {textContent: 'Home'};
		Object.assign(butHomeObj, this.butNavObj);

	    let navButHome = azul.addElement(butHomeObj);
		navButHome.addEventListener('click', blogSection.navfH);

		let milObj = azul.addElement(this.menuInlineObj);
    	let item1 = azul.addElement(this.itemObj);
		item1.appendChild(navBut1);
		milObj.appendChild(item1);

    	let item2 = azul.addElement(this.itemObj);
		item2.appendChild(navBut2);
		milObj.appendChild(item2);

    	let item3 = azul.addElement(this.itemObj);
		item3.appendChild(navButHome);
		milObj.appendChild(item3);

		par.appendChild(milObj);
	},

};

let footerTerms = {
    blogDivObj: {
        style: {
			width: '100%',
			margin: '10px',
            minHeight: '100px',
            marginInline: 'auto',
            border: '1px dashed yellow',
        },
        id: 'footerTerm',
        typ: 'div',
    },

	parObj: {
		typ: 'p',
		textContent: 'Terms',
		style: {
			margin: '10px',
		},
	},

	init(par) {
		this.par = par;
		this.blogDiv = azul.addElement(this.blogDivObj);
		let terms = azul.addElement(this.parObj);
		this.blogDiv.appendChild(terms);
	},

	fbut() {
		console.log('grid terms click');
		let list = footerTerms.par;
		while (list.hasChildNodes()) {
  			list.removeChild(list.firstChild);
		}
		list.appendChild(footerTerms.blogDiv);
	},

};

let footerPriv = {
    blogDivObj: {
        style: {
			width: '100%',
			margin: '10px',
            minHeight: '100px',
            marginInline: 'auto',
            border: '1px dashed yellow',
        },
        id: 'footerTerm',
        typ: 'div',
    },

	parObj: {
		typ: 'p',
		textContent: 'Privacy',
		style: {
			margin: '10px',
		},
	},

	init(par) {
		this.par = par;
		this.blogDiv = azul.addElement(this.blogDivObj);
		let terms = azul.addElement(this.parObj);
		this.blogDiv.appendChild(terms);
	},

	fbut() {
		console.log('grid privacy click');
		let list = footerTerms.par;
		while (list.hasChildNodes()) {
  			list.removeChild(list.firstChild);
		}
		list.appendChild(footerPriv.blogDiv);
	},

};



let blogFooter = {

    nfObj: {
        style: {
            height: '150px',
            margin: '10px',
            border: '1px dashed red',
            position: 'relative',
        },
        id: 'nfooter',
        typ: 'div',
    },

    gridObj: {
        rows: 3,
        cols: 4,
        style: {
            display: 'grid',
            border: '1px solid blue',
            margin: '10px',
            minHeight: '100px',
        },
        elStyle: {
            border: '1px solid green',
        }
    },

    butObj: {
        style: {
	        background: 'none',
    	    border: 'none',
        	padding: '0 0 0 10px',
			cursor: 'pointer',
       	},
		typ: 'button',
	},

	render(par) {
	    const nfooter = azul.addElement(this.nfObj);
		const fgrid = azul.addGrid(this.gridObj);

		const fbut1 = azul.addElement(this.butObj);
		fbut1.textContent = 'Privacy';
		fbut1.addEventListener('click', footerPriv.fbut);
   		fgrid.els[0][0].appendChild(fbut1);

		const fbut2 = azul.addElement(this.butObj);
		fbut2.textContent = 'Terms';
		fbut2.addEventListener('click', footerTerms.fbut);
   		fgrid.els[0][1].appendChild(fbut2);
		azul.footer.appendChild(fgrid);
	},

};

azulSPA.render = function() {

    azul.loadPage(azulSPA);

	blogA.init(azul.docbody);
	blogB.init(azul.docbody);
	footerPriv.init(azul.docbody);
	footerTerms.init(azul.docbody);

	blogHeader.render(azul.header);

	blogSection.init(azul.docbody);

	blogFooter.render(azul.footer);

    document.body.appendChild(azul.divMain);
};

const docObj = {
	title: 'Azul Test',
    metaObj: {
        metaNames: [
            {name: 'description', content: 'testing base'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/6/2025'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
            ],
    	},
	bodyStyl: {
		fontSize: '16px',
		},
};

azul.init(docObj);

azulSPA.render();

