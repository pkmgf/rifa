const sheetID = '10UIswNSTrt2nQR08T6K3tblmryO5ZQm5ogzJewFY_jc';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'users';
const query = encodeURIComponent('Select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded',init);

const output = document.querySelector('.output');

function init(){
    console.log('ready');
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        //console.log(rep);
        const jsData = JSON.parse(rep.substring(47).slice(0,-2)); //Extracting just the data
        console.log(jsData);
        const colz = [];
        jsData.table.cols.forEach((heading)=>{ //Loop for each collumn
            if(heading.label) {
                const propName = heading.label.toLowerCase().replace(/\s/g,''); //creating object, format to lower case and excluding spaces
                colz.push(propName);
                //console.log(propName);
            }
        })
        jsData.table.rows.forEach((main)=>{ //Loop for each row
            //console.log(main);
            const row = {};
            colz.forEach((ele,ind)=>{
                //console.log(ele);
                row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
            })
            data.push(row);
        })
        console.log(data);
    })
}

function maker(json){
    const div = document.createElement('div');
    div.style.display = 'grid';
    div.style.gridTemplateColumns = '100px 100px 100px 100px';
    output.append(div);
    json.forEach((el)=>{
        //console.log(ele);
        const keys = Object.keys(el);
        keys.forEach((key)=>{
            const ele = document.createElement('div');
            ele.textContent = el[key];
            div.append(ele);
        })

        console.log(keys);
    })
}