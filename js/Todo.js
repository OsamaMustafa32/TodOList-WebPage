var typed = new Typed('.blink', {
  strings: ["Hello !", "Enter your Todo List."],
  typeSpeed: 0
});



var add = document.getElementById("add");
var removeALL = document.getElementById("removeall");
var list = document.getElementById("list");

//remove all button

removeALL.onclick = function(){
    list.innerHTML = '';
}

//adding a new list element

add.onclick = function(){
    addlist(list);
    document.getElementById("userinput").value = '';
    document.getElementById("userinput").focus();
}

function addlist(targetUl){
    var inputText = document.getElementById("userinput").value;
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputText + '');
    var removeButton = document.createElement("button");
    
    if(inputText !== ''){
        removeButton.className = "btn btn-xs btn-danger";
        removeButton.innerHTML = "&times";
        removeButton.setAttribute("onclick","removeMe(this)");
        
    
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    }
    else{
        alert("please enter a TODO");
    }
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}








