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
        padding: '0.5em',
    };

    const hdObj = {
        style: hdStyl,
        parent: azul.header,
        id: 'header',
        className: 'doch3',
        textContent: 'Azul Accounting',
        typ: 'h3',
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
			top: '30px',
			right: '50px',
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

	function onCreated(windowInfo) {
		console.log(`Created window: ${windowInfo.id}`);
	}
	function onError(error) {
		console.log(`Error: ${error}`);
	}

	function bclick() {
		console.log('starting popup2!');
 		let url = 'https://test.imgerp.eu:9001/login'
		newWindow=window.open(url,'name','height=700,width=800');  
    	if(newWindow == null){
        	alert('We have detected that you are using popup blocking software...');}
    	if (window.focus) {newWindow.focus()}
	}

	function photoclick() {
		console.log('end photo');
 		let url = 'https://test.imgerp.eu:9001/photo'

		fetch(url)
			.then((resp) => {
				if (!resp.ok) {
					throw new Error(`Response status: ${resp.status}`);
	    		}
				return resp.text();
			})
			.then((text) => {
    			console.log('executing photo script');
			})
  			.catch ((error) => {console.error(error.message);})
	}

	function photoclick2() {
		const phscript = document.createElement('script');
		phscript.src = 'https://test.imgerp.eu:9001/js/photoresp.js'
		phscript.onload = function () {console.log('phscript loaded');};
		phscript.onerror = function() {console.log('error loading phscript!');};
		document.head.appendChild(phscript);
	}

	function endclick() {
		console.log('end photo!');
	}


	const butObj = {
		text: 'login',
		style: {
			height: '30px',
			width: '100px',
			margin: '20px',
			border: '1px solid black',
		},
		clickfun: bclick,
	};

	let loginbut = new azulButton(butObj);

	azul.header.appendChild(loginbut.el);

	const photobutObj = {
		text: 'photos',
		style: {
			height: '30px',
			width: '100px',
			margin: '20px',
			border: '1px solid black',
		},
		clickfun: photoclick2,
	};

	let photobut = new azulButton(photobutObj);

	azul.header.appendChild(photobut.el);

	const endphotobutObj = {
		text: 'photos end',
		style: {
			height: '30px',
			width: '100px',
			margin: '20px',
			border: '1px solid black',
		},
		clickfun: photoclick,
	};

	let endphotobut = new azulButton(endphotobutObj);

	azul.header.appendChild(endphotobut.el);



    document.body.appendChild(azul.divMain);
};

const docObj = {
	title: 'azul test',
    metaObj: {
        metaNames: [
            {name: 'description', content: 'pg client'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/3/2025'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
            ],
    	},
	bodyStyl: {
		fontSize: '16px',
		},
};

azul.init(docObj);

crePage();

