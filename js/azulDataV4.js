// data v1
let dataTest = {
    parObj: {
        typ: 'h2',
        textContent: 'Data Test',
        style: {
 //           margin: '10px',
            margin: 'auto',
            textAlign: 'center',
         },
    },

	subButObj: {
		text: 'submit test',
		style: {
			display: 'block',
			textAlign: 'center',
			width: '200px',
			margin: '20px auto',
		},
	},

	gridObj: {
		rows: 3,
		cols: 1,
		matrix: [[{Field: 'First', Length: '150px', idx: 1},{Field: 'Middle', Length: '200px', idx: 2},{Field: 'Last', Length: '200px', idx: 3}],
		[{Field: 'Email',Length: '250px', idx: 4}]],
		style: {
			display: 'grid',
			border: '1px dashed blue',
			margin: '10px',
		},
		elStyle: {
			display: 'flex',
			flexWrap: 'wrap',
			minHeight: '50px',
//          margin: '5px',
			outline: '1px dashed magenta',
//          border: '1px dashed green',
		},
	},


	rendGrid(gridObj) {

//		namegrid is a div element
		gridObj.rows = gridObj.matrix.length;
		let cols = 0;
		for (let i=0; i< gridObj.matrix.length; i++) {
			if (cols < gridObj.matrix[i].length) {cols =gridObj.matrix[i].length;}
		}
//		gridObj.cols = cols;
		gridObj.cols = 1;

        let namgrid = azul.addGrid(gridObj);
        namgrid.rows = gridObj.rows;
        namgrid.cols = gridObj.cols;

//        namgrid.inp1 = new azulInp({Field: 'First', Length: '150px', idx: 1});
//        namgrid.inp2 = new azulInp({Field: 'Middle', Length: '200px', idx: 2});
//        namgrid.inp3 = new azulInp({Field: 'Last', Length: '200px', idx: 3});

		namgrid.inpels = [];
//		namgrid.inpel.length = gridObj.rows;
//		let elcnt = 0;
		for (let r=0; r< gridObj.matrix.length; r++) {
			for (let c=0; c< gridObj.matrix[r].length; c++) {
				let inpel = new azulInp(gridObj.matrix[r][c]);
				namgrid.inpels.push(inpel);
				namgrid.els[r][0].appendChild(inpel.inpDiv);
//				elcnt++;
			}
		}
		let elcnt = namgrid.inpels.length

		for (let i=0; i< elcnt; i++) {
			let inxt = i++;
			if (inxt>elcnt-1) {inxt=0;}
			let iprv = i--;
			if (iprv<0) {iprv=elcnt-1;}
	        namgrid.inpels[i].setnextprev(namgrid.inpels[inxt], namgrid.inpels[iprv]);
		}

		return namgrid;
    },

    getInpValues: function(namesObj) {
        let inpVal = {
            First: namesObj.inpels[0].getInpValue(),
            Middle: namesObj.inpels[1].getInpValue(),
            Last: namesObj.inpels[2].getInpValue(),
            Email: namesObj.inppels[3].getInpValue(),
//            Phone: namesObj.inp5.getInpValue(),
        };
        const inpJsonStr = JSON.stringify(inpVal)
        console.log('hello inp: ' + inpJsonStr);
        return inpJsonStr;
    },

	rend(root) {
		let txtel = azul.addElement(this.parObj);
		root.appendChild(txtel);
		let namGrid = this.rendGrid(this.gridObj);
		root.appendChild(namGrid);
		let subBut = new azulButton(this.subButObj);
		subBut.el.addEventListener('click', function() {console.log('submit');},false);
		root.appendChild(subBut.el);
		return root;
	},

};


let headDataObj = new AzulBlog(dataTest, blogHeader.navBut3);
headDataObj.render();

