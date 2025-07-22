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
		[{}]],
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
        let namgrid = azul.addGrid(this.gridObj);
        namgrid.rows = this.gridObj.rows;
        namgrid.cols = this.gridObj.cols;

        namgrid.inp1 = new azulInp({Field: 'First', Length: '150px', idx: 1});
        namgrid.inp2 = new azulInp({Field: 'Middle', Length: '200px', idx: 2});
        namgrid.inp3 = new azulInp({Field: 'Last', Length: '200px', idx: 3});

        let firstRow = namgrid.els[0][0];
        firstRow.appendChild(namgrid.inp1.getInpEl());
        firstRow.appendChild(namgrid.inp2.getInpEl());
        firstRow.appendChild(namgrid.inp3.getInpEl());

        let secRow = namgrid.els[1][0];
        namgrid.inp4 = new azulInp({Field: 'Email',Length: '250px', idx: 4});
        secRow.appendChild(namgrid.inp4.getInpEl());

        namgrid.inp1.setnextprev(namgrid.inp2, namgrid.inp5);
        namgrid.inp2.setnextprev(namgrid.inp3, namgrid.inp1);
        namgrid.inp3.setnextprev(namgrid.inp4, namgrid.inp2);
        namgrid.inp4.setnextprev(namgrid.inp5, namgrid.inp3);
//        namGridSec.inp5.setnextprev(namGridSec.inp1, namGridSec.inp4);

		namgrid.list = new Array(namgrid.inp1, namgrid.inp2, namgrid.inp3, namgrid.inp4);
		return namgrid;
    },

    getInpValues: function(namesObj) {
        let inpVal = {
            First: namesObj.inp1.getInpValue(),
            Middle: namesObj.inp2.getInpValue(),
            Last: namesObj.inp3.getInpValue(),
            Email: namesObj.inp4.getInpValue(),
            Phone: namesObj.inp5.getInpValue(),
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

