function save() {
    const name=document.getElementById("name").value ;
    const age=document.getElementById("age").value ;
    const course=document.getElementById("course").value ;
    const gender=document.querySelector('input[name="Gender"]:checked').value ;
    const email=document.getElementById("email").value ;

    const table=document.getElementById('datatable').getElementsByTagName('tbody')[0];
    const newrow =table.insertRow();
    const cell1=newrow.insertCell(0);
    const cell2=newrow.insertCell(1);
    const cell3=newrow.insertCell(2);
    const cell4=newrow.insertCell(3);
    const cell5=newrow.insertCell(4);
    const cell6=newrow.insertCell(5);

    cell1.innerHTML=name;
    cell2.innerHTML=age;
    cell3.innerHTML=course;
    cell4.innerHTML=gender;
    cell5.innerHTML=email;
    cell6.innerHTML=('<button onclick=deleteitem(this)>DELETE</button>');

    document.getElementById('studentForm').reset();
}
function deleteitem(button){
    const row=button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}