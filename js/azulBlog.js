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
                height: '100px',
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

	azul.menuIcon = azul.addIcon(menuObj);

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
        textContent: 'Valencia Housing',
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
	title: 'Valencia Blog',
    metaObj: {
        metaNames: [
            {name: 'description', content: 'pg client'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/4/2025'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
            ],
    	},
	bodyStyl: {
		fontSize: '16px',
		},
};

azul.init(docObj);

crePage();

