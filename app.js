function addTask() {
    var userInput = document.getElementById("task"),
        list = document.createElement("LI"),
        ranNum = (Math.random()*100000000).toString(),
        id = ranNum.substring(0, 8);

    list.innerHTML = userInput.value;
    userInput.value="";
    var tasks = document.getElementById("list");
        tasks.appendChild(list);
    list.setAttribute("id", id);
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("X");
    //var idVal = att.getAttribute("id");
        btn.appendChild(t);
    list.appendChild(btn);
        btn.setAttribute('onclick','del(event)');
    list.getAttribute(id);
    //console.log(idVal);


}


function del() {
    var target = event.target,
        parentTarget = target.parentElement;
        //childTarget = parentTarget.child;
        parentTarget.remove();
}