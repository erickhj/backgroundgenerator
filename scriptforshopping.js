/*File for shoppinglsit.html*/
var userinput=document.getElementById("userinput");
var button=document.getElementById("enter");
//var ul=document.querySelector("ul");
var maindiv=document.getElementById("maindiv");
var textsize=userinput.value.length;
//var deletebtn=document.getElementById("delete");

maindiv.addEventListener("click",clickondiv);

//ul.addEventListener("click",markdone);
button.addEventListener("click", appendtolist)
//deletebtn.addEventListener("click",deleterow)

document.addEventListener("keypress",function(event){
    if( event.keyCode===13)
    {
        appendtolist();
    }
})
function appendtolist()
{
    if(userinput.value.length > 0)
    {
        
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(userinput.value));
        li.id="item";
        var button=document.createElement("button");
        button.className="btn btn-primary";
        button.textContent="delete";
        var numofrows=maindiv.childElementCount;
        button.id="0."+(numofrows).toString();
        var divc=document.createElement("div");
        divc.className="col";
        var divr=document.createElement("div");
        var divc2=document.createElement("div");
        divc2.className="col";
        divr.className="row";
        divr.id=(numofrows).toString();
        divr.appendChild(divc);
        divc.appendChild(li);
        divr.appendChild(divc2);
        divc2.appendChild(button);
        maindiv.appendChild(divr);
        userinput.value="";
    }  
}
function clickondiv()
{
    if (event.target.id === "item") {
        if (event.target.className !== "done") {
            event.target.classList.add("done");
        }
        else {
            event.target.classList.toggle("done");
        }
    }
    if (event.target.className === "btn btn-primary") {
        var clickeditem=parseInt (event.target.id.split('.')[1]);
        maindiv.removeChild(document.getElementById(clickeditem));
    }
}