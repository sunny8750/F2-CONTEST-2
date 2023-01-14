
function formchk(){
    var name = document.getElementById("name").value;
    var profession = document.getElementById("profession").value;
    var age = document.getElementById("age").value;

    if(name !="" && profession !="" && age !=""){
       document.getElementById("success1").classList.remove("display")
    }else{
        document.getElementById("success1").classList.add("display")
      document.getElementById("error1").classList.remove("display")
    }

   let table=document.getElementById('old');
       let newArray=[name,profession,age]
       newArray.forEach((item)=>{
        var li = document.createElement("li");
        var text=document.createTextNode(item);
        li.appendChild(text);
        table.appendChild(li)
       })
}