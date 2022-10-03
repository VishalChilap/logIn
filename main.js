
var divRef = document.getElementById('table');

function createTable(){
    var tableRef = document.createElement("table");

    var theadRef = document.createElement('thead');

    var tbodyRef = document.createElement('tbody');


    var row1 = document.createElement('tr');
    var row2 = document.createElement('tr');
    var row3 = document.createElement('tr');
    var row4 = document.createElement('tr');

    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');


    th1.innerText = 'ID';
    th2.innerText = 'NAME';
    th3.innerText = 'CITY';

    row1.appendChild(th1);
    row1.appendChild(th2);
    row1.appendChild(th3);

    theadRef.appendChild(row1);

    tableRef.appendChild(theadRef);


    td1.innerText = '1';
    td2.innerText = 'S1';
    td3.innerText = 'C1';

    row2.appendChild(td1);
    row2.appendChild(td2);
    row2.appendChild(td3);

    tbodyRef.appendChild(row2);

    td4.innerText = '2';
    td5.innerText = 'S2';
    td6.innerText = 'C2';

    row3.appendChild(td4);
    row3.appendChild(td5);
    row3.appendChild(td6);

    tbodyRef.appendChild(row3);

    td7.innerText = '3';
    td8.innerText = 'S3';
    td9.innerText = 'C3';

    row4.appendChild(td7);
    row4.appendChild(td8);
    row4.appendChild(td9);

    tbodyRef.appendChild(row4);

    tableRef.appendChild(tbodyRef);

    theadRef.className = 'table-dark';

    tableRef.className = 'table table-hover ownClass';

    divRef.appendChild(tableRef);

}