const sheetID = '10UIswNSTrt2nQR08T6K3tblmryO5ZQm5ogzJewFY_jc';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'users';
const query = encodeURIComponent('Select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];

document.addEventListener('DOMContentLoaded',init);

function init(){
    console.log('ready');
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        console.log(rep);
    })
}