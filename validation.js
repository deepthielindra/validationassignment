function validate (){
    var title=document.getElementById("titleid").value;
    var price=document.getElementById("priceid").value;
    var Author_name=document.getElementById("authorid").value;
    var publisher=document.getElementById("dateid").value;
    var Noofcopies=document.getElementById("copiesid").value;

    if(title==""){
        alert("title should be given");
        return false;
    }
    if(price<0){
        alert("price should be valid");
        return false;
    }
    if(Author_name==""){
        alert("author name should be given");
        return false;
    }
    if(publisher==""){
        alert("Publisher name should be specified");
        return false;
    }
    if(Noofcopies<0 && Noofcopies <10){
        alert("enter required books only");
        return false;
    }
    return true;
}
 
