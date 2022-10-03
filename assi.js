var formRef = document.getElementById("form");

var colNextRef = document.getElementById("colNext");

var tableRef = document.getElementsByTagName("table");

var tableBodyRef = document.getElementsByTagName("tbody");

var nameRef = document.getElementById("name");

var passRef = document.getElementById("password");

var emailRef = document.getElementById("email");

var cityRef = document.getElementById("city");


var tableMain = document.createElement("table");

var theadRef = document.createElement("thead");

var tbodyRef = document.createElement("tbody");


formRef.addEventListener("submit", onSubmit);

function onSubmit(event){

    event.preventDefault();

    var result = checkTable();
    console.log(result);

    if(result===false){
        colNextRef.appendChild(createTable());
        nameRef.value = '';
        passRef.value = "";
        emailRef.value = '';
        cityRef.value = "";
    }

    else{

        var temp = createRow();

        tbodyRef.appendChild(temp);

        tableMain.appendChild(tbodyRef);

        nameRef.value = '';
        passRef.value = "";
        emailRef.value = '';
        cityRef.value = "";

    }

}


// cheking table is present or not
function checkTable(){
    console.log("hiii");

    if(tableRef.length>0){
        return true;
    }

    else{
        
        return false;
    }
}


// If table is not present then create table with one row

function createTable(){

    var row1 = document.createElement("tr");
    var row2 = document.createElement("tr");

    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    th1.innerText = "NAME";
    th2.innerText = "CITY";
    th3.innerText = "EMAIL";
    th4.innerText = "EDIT";
    th5.innerText = "DELETE";
    
    row1.appendChild(th1);
    row1.appendChild(th2);
    row1.appendChild(th3);
    row1.appendChild(th4);
    row1.appendChild(th5);

    theadRef.appendChild(row1);

    tableMain.appendChild(theadRef);

    td1.innerText = nameRef.value;
    td2.innerText = cityRef.value;
    td3.innerText = emailRef.value;
    td4.innerHTML += "<button class='btn btn-outline-primary' onClick='edit(this)'>Edit</button>";
    td5.innerHTML += "<button class='btn btn-outline-primary' onClick= 'deleteData(this)'>Delete</button>";

    row2.appendChild(td1);
    row2.appendChild(td2);
    row2.appendChild(td3);
    row2.appendChild(td4);
    row2.appendChild(td5);

    tbodyRef.appendChild(row2);

    tableMain.appendChild(tbodyRef);

    tableMain.classList = "table table-hover ownClass";

    theadRef.classList = "table-dark";

    return tableMain;

}


// create row if table is present

function createRow(){
    var nexrRow = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    td1.innerText = nameRef.value;
    td2.innerText = cityRef.value;
    td3.innerText = emailRef.value;
    td4.innerHTML += "<button class='btn btn-outline-primary' onClick='edit(this)'>Edit</button>";
    td5.innerHTML += "<button class='btn btn-outline-primary' onClick= 'deleteData(this)'>Delete</button>";

    nexrRow.appendChild(td1);
    nexrRow.appendChild(td2);
    nexrRow.appendChild(td3);
    nexrRow.appendChild(td4);
    nexrRow.appendChild(td5);

    return nexrRow;
}



function edit(e){

   var email =  e.parentElement.previousElementSibling.innerText;

   var city = e.parentElement.previousElementSibling.previousElementSibling.innerText;

   var name = e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;

   console.log(email);
   console.log(city);
   console.log(name);

   emailRef.value = email;
   cityRef.value = city;
   nameRef.value = name;

   e.parentElement.parentElement.remove();

}

function deleteData(e){
    e.parentElement.parentElement.remove();

    console.log('delete', e.parentElement.parentElement)
}
