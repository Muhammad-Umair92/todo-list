
function addTask() {
    var userInput = document.getElementById("task"),
        list = document.createElement("LI"),
        ran = (Math.random()*100000000).toString(),
        id = ran.substring(0, 8);

    list.innerHTML = userInput.value;
    userInput.value="";
    var tasks = document.getElementById("list");
        tasks.appendChild(list);
    var att = tasks.setAttribute("id", id),
        btn = document.createElement("BUTTON");
    var t = document.createTextNode("X");
    //var idVal = att.getAttribute("id");
        btn.appendChild(t);
    var btnX = list.appendChild(btn);
        btn.setAttribute('onclick','del()');
    var idVal = list.getAttribute(id);
    console.log(idVal);


}


function del() {
    document.getElementById()


}