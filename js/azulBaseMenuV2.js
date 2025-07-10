function loadSection(url) {

    const ldscript = document.createElement('script');

    ldscript.src = url;
    ldscript.type = "application/javascript";

    ldscript.onload = () => {console.log('Script loaded successfully: ' + url);};

    ldscript.onerror = () => {
        console.log('Error occurred while loading script: ' + url);
    };

    document.body.appendChild(script);
}


function crePage() {
    const pageObj = {
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
                height: '100px',
                margin: '10px',
                border: '1px solid green',
                position: 'relative',
            },
            id: 'footer',
            className: 'pagSections',
        },
    };


    azul.loadPage(pageObj);


    const hdStyl = {
        color: 'MediumPurple',
        margin: 'auto',
        textAlign: 'center',
		fontSize: '2rem',
        padding: '0.5em',
    };

    const hdObj = {
        style: hdStyl,
        parent: azul.header,
        id: 'header',
        className: 'doch3',
        textContent: 'Valencia Blog',
        typ: 'h2',
    };
	azul.addElement(hdObj);

	let navf1 = function () {console.log('nav f1 click');};
	let navf2 = function () {console.log('nav f2 click');};

    const butNavStyl = {
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
    };

    const butNavObj = {
        stylObj: butNavStyl,
        typ: 'button',
    };

	const butNavObj1 = {textContent: 'About Us'};
	Object.assign(butNavObj1, butNavObj);
//	butNavObj1.evlist.click = this.navf1;

    let navBut1 = azul.addElement(butNavObj1);
	navBut1.addEventListener('click', navf1);

	const butNavObj2 = {textContent: 'Services'};
	Object.assign(butNavObj2, butNavObj);

    let navBut2 = azul.addElement(butNavObj2);
	navBut2.addEventListener('click', navf2);

	const milStyl = {
		display: 'flex',
		justifyContent: 'flex-end',
		border: '1px dashed green',
		width: '100%',
		minHeight: '30px',
	}

    const menuInlineObj = {
        style: milStyl,
//        parent: azul.header,
        id: 'inlineMenu',
        typ: 'div',
    };

    milObj = azul.addElement(menuInlineObj);

	const itemStyl = {
		border: '1px dashed orange',
		margin: '5px',
		minWidth: '100px',
		textAlign: 'center',
	};

	const item1Obj = {
		style: itemStyl,
		typ: 'div',
	};

	const itemTxtStyl = {
		textAlign: 'center',
		verticalAlign: 'middle',
	};

    item1 = azul.addElement(item1Obj);
	item1.appendChild(navBut1);
	milObj.appendChild(item1);

    item2 = azul.addElement(item1Obj);
	item2.appendChild(navBut2);
	milObj.appendChild(item2);

	azul.header.appendChild(milObj);

    const hdfooterObj = {
        style: hdStyl,
        parent: azul.footer,
        id: 'foodheader',
        className: 'doch3',
        textContent: 'footer',
        typ: 'h3',
    };
    azul.addElement(hdfooterObj);

	const menuObj = {
        parent: azul.header,
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
	};

	azul.addIcon(menuObj);

    const bloghdStyl = {
        color: 'blue',
        margin: 'auto',
        textAlign: 'center',
		fontSize: '1.5rem',
        padding: '0.5em',
    };

	const blogTitle = {
        style: bloghdStyl,
        parent: azul.docbody,
        id: 'blogTitle',
        textContent: 'Azul Testing',
        typ: 'h3',
	};

    azul.addElement(blogTitle);

	const imgPDivObj = {
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
	};
	const imgRDivObj = {
        style: {
			minWidth: '300px',
			maxWidth: 'fit-content',
			minHeight: '200px',
			margin: '10px',
			border: '1px dashed blue',
		},
        id: 'imgRDiv',
        typ: 'div',
	};
	const imgLDivObj = {
        style: {
			minWidth: '300px',
			maxWidth: 'fit-content',
			minHeight: '200px',
			margin: '10px',
			border: '1px dashed blue',
		},
        id: 'imgLDiv',
        typ: 'div',
	};


    let imgPDiv = azul.addElement(imgPDivObj);

    let imgRDiv = azul.addElement(imgRDivObj);
    let imgLDiv = azul.addElement(imgLDivObj);
	imgPDiv.appendChild(imgLDiv);
	imgPDiv.appendChild(imgRDiv);
	azul.docbody.appendChild(imgPDiv);

    const mdDivObj = {
        style: {
			width: '100%',
			margin: '10px',
//          minWidth: '600px',
//            maxWidth: 'fit-content',
            minHeight: '100px',
            marginInline: 'auto',
            border: '1px dashed green',
        },
        id: 'mdDiv',
        typ: 'div',
    };

	let mdDiv = azul.addElement(mdDivObj);

 	azul.docbody.appendChild(mdDiv);


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


crePage();

