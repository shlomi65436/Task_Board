var count = 0;
function btndeletes(){
    this.parentElement.remove();
}

function btnups(){
    var li = this.parentElement;
    var prevLi = li.previousElementSibling;
    if (prevLi) {
        li.parentElement.insertBefore(li, prevLi);
    }
}

function btndowns(){
    var li = this.parentElement;
    var nextLi = li.nextElementSibling;
    if (nextLi) {
        li.parentElement.insertBefore(nextLi, li);
    }
}

function btnmarks(){
    var li = this.parentElement;
    if(this.innerHTML == "Mark"){
        li.style.fontWeight = "800";
        li.style.color = "#c10417 ";
        this.innerHTML = "Unmark";
    }else{
        li.style.color = "black";
        li.style.fontWeight = "100";
        this.innerHTML = "Mark";
    }
}
document.addEventListener("keyup", function(key) {
    if (key.key == 'Enter') {
        fun();
    }
});

function fun(){
    var t = document.getElementById("sue").value;
    if(t.length == 0 || t.length > 30){
        return;
    }
    count += 1;
    var li = document.getElementById("t").appendChild(document.createElement("li"));
    li.innerHTML = t;
    li.style.marginTop = "10px";
    var btndelete = li.appendChild(document.createElement("BUTTON"));
    btndelete.innerHTML = "Delete";
    btndelete.style.marginRight = "10px";
    btndelete.style.float = "right";
    btndelete.addEventListener("click", btndeletes);

    var btndown = li.appendChild(document.createElement("BUTTON"));
    btndown.innerHTML = "Down";
    btndown.style.float = "right";
    btndown.style.marginRight = "10px";
    btndown.addEventListener("click", btndowns);

    var btnup = li.appendChild(document.createElement("BUTTON"));
    btnup.innerHTML = "Up";
    btnup.style.float = "right";
    btnup.style.marginRight = "10px";
    btnup.addEventListener("click", btnups);

    var btnmark = li.appendChild(document.createElement("BUTTON"));
    btnmark.innerHTML = "Mark";
    btnmark.style.float = "right";
    btnmark.style.marginRight = "10px";
    btnmark.addEventListener("click", btnmarks);

}

function cls(){
    document.getElementById('clear').style.display = 'none';
    document.getElementById('yesno').style.display = 'inline';

}


function yes(){
        var list = document.getElementById('t');
        while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
      document.getElementById('clear').style.display = 'inline';
    document.getElementById('yesno').style.display = 'none';
}

function no(){
    document.getElementById('clear').style.display = 'inline';
    document.getElementById('yesno').style.display = 'none';
}
