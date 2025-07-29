// v2: move code into functions
// v3: move header into obj
// v4 move section into obj
// V5: add section code for blog
// v6:
// V7: add footer4
// V8: add google map
// V9: add loading external scripts lazily
// V12: add ability to insert html into azul.docbody
// v14: added Class AzulBlog
// V15:
//

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

function loadFootTxt(url) {

    const ldscript = document.createElement('script');

    ldscript.src = url;
    ldscript.type = "application/javascript";
	ldscript.async = true;

    ldscript.onload = () => {console.log('Script loaded successfully: ' + url);};

    ldscript.onerror = () => {
        console.log('Error occurred while loading script: ' + url);
    };

// inserting it will execute the script
    document.body.appendChild(ldscript);
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
//			width: 'calc(100% -300px',
			width: '100%',
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

	render(par) {

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
			flexWrap: 'wrap',
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
	    this.navBut1 = azul.addElement(butNavObj1);

		const butNavObj2 = {textContent: 'Services'};
		Object.assign(butNavObj2, this.butNavObj);
	    this.navBut2 = azul.addElement(butNavObj2);


        const butNavObj3 = {textContent: 'Test'};
        Object.assign(butNavObj3, this.butNavObj);
        this.navBut3 = azul.addElement(butNavObj3);

		const butHomeObj = {textContent: 'Home'};
		Object.assign(butHomeObj, this.butNavObj);
	    let navButHome = azul.addElement(butHomeObj);
		navButHome.addEventListener('click', blogSection.navfH);

		let milObj = azul.addElement(this.menuInlineObj);
    	let item1 = azul.addElement(this.itemObj);
		item1.appendChild(this.navBut1);
		milObj.appendChild(item1);

    	let item2 = azul.addElement(this.itemObj);
		item2.appendChild(this.navBut2);
		milObj.appendChild(item2);

    	let item3 = azul.addElement(this.itemObj);
		item3.appendChild(this.navBut3);
		milObj.appendChild(item3);

    	let item4 = azul.addElement(this.itemObj);
		item4.appendChild(navButHome);
		milObj.appendChild(item4);

		par.appendChild(milObj);
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

		this.fbut1 = azul.addElement(this.butObj);
		this.fbut1.textContent = 'Privacy';
   		fgrid.els[0][0].appendChild(this.fbut1);

		this.fbut2 = azul.addElement(this.butObj);
		this.fbut2.textContent = 'Terms';
   		fgrid.els[1][0].appendChild(this.fbut2);

		this.fbut3 = azul.addElement(this.butObj);
		this.fbut3.textContent = 'Directions';
   		fgrid.els[0][3].appendChild(this.fbut3);

		this.fbut4 = azul.addElement(this.butObj);
		this.fbut4.textContent = 'Test';
   		fgrid.els[0][1].appendChild(this.fbut4);
		azul.footer.appendChild(fgrid);
	},

};

azulSPA.render = function() {

    azul.loadPage(azulSPA);

	blogHeader.render(azul.header);

	blogSection.render(azul.docbody);

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

//loadFootTxt('js/azulFootTxt.js');

azul.init(docObj);

azulSPA.render();

