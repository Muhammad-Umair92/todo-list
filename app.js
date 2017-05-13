var userInput = document.getElementById("task");

function dis() {
    document.getElementById("btnAddTask").disabled = true;
}
if (userInput.value == ""){dis()}

function writeNow(){
    if (userInput.value == ""){dis()}
    else{
        document.getElementById("btnAddTask").disabled = false;
    }
}
function condition() {
    if (document.getElementById("btnAddTask").innerText == "Add Task") {
        addTask();
    }
    else {
        update();
    }
}
function addTask() {

    if (userInput.value == ""){dis()}

    var para = document.createElement("P"),
        list = document.createElement("LI"),
        ranNum = Math.random().toString(),
        id = ranNum.substring(2, 14);

    para.innerHTML = userInput.value;
    userInput.value="";

    var tasks = document.getElementById("list");
    tasks.appendChild(list);
    list.appendChild(para);
    list.setAttribute("id", id);

    list.setAttribute("Class", "unChked_li");

    var btnDiv = document.createElement("DIV");
    list.appendChild(btnDiv);
    btnDiv.setAttribute("Class","btn_Div");

    var btnX = document.createElement("BUTTON"),
        btnXVal = document.createTextNode(""),
        btnEdit = document.createElement("BUTTON"),
        btnEditVal = document.createTextNode("");

    var chk = document.createElement("INPUT");
    chk.setAttribute("type", "checkbox");
    chk.setAttribute("Class", "form-control");
    chk.setAttribute("id", "chk_box");
    chk.setAttribute("onclick", "done()");
    var chkBox = list.children[1].appendChild(chk);

    btnX.appendChild(btnXVal);
    btnDiv.appendChild(btnX);
    btnX.setAttribute('onclick','del(event)');
    btnEdit.appendChild(btnEditVal);
    btnDiv.appendChild(btnEdit);
    btnEdit.setAttribute('onclick','edit(event)');
    btnEdit.setAttribute("Class","glyphicon glyphicon-pencil");

    btnX.setAttribute("Class","glyphicon glyphicon-trash");

    dis();
}

function del() {
    var target = event.target,
        parentTarget = target.parentElement.parentElement;
    parentTarget.remove();
}

function edit() {

    var target = event.target,

        parentTarget = target.parentElement.parentElement,
        listTargetId = parentTarget.id,
        addTaskButton = document.getElementById("btnAddTask");
    parentTarget.children[0].setAttribute("Class", "high");

    addTaskButton.innerText = "Update";
    addTaskButton.setAttribute("task_id", listTargetId);
    var editTarget = event.target,
        parentTarget = editTarget.parentElement,
        pTxt = (parentTarget.parentElement.getElementsByTagName("P")),
        InputBtn = document.getElementById("btnAddTask").innerText = "Update",
        valPTxt = (pTxt[0].innerText);

    userInput.value = valPTxt;
    disable();
}
function update() {

    var updateTarget = event.target,
        id_list = updateTarget.getAttribute("task_id"),
        list_txt = document.getElementById(id_list);

    list_txt.children[0].innerText = userInput.value;
    document.getElementById("btnAddTask").innerText = "Add Task";
    userInput.value = "";

    var remove = document.getElementsByClassName("high")[0];
    remove.setAttribute("Class", "");
    dis();

    var diss = document.getElementsByClassName("unChked_li");
    for (var i = 0; i < diss.length; i++) {
        var a = diss[i].children[1];
            for (var x = 0; x < 3; x++) {
                a.children[x].disabled = false;
            }
    }

    var enn = document.getElementsByClassName("chked_li");
    for (var i = 0; i < enn.length; i++) {
        var a = enn[i].children[1];
        a.children[0].disabled = false;
        a.children[1].disabled = false;
    }
}
function disable(){
    var dis = document.getElementById("list").getElementsByTagName("BUTTON");
    for (var i=0; i<dis.length; i++) {
        dis[i].disabled = true;
    }
    var dis = document.getElementById("list").getElementsByTagName("INPUT");
    for (var i = 0; i < dis.length; i++) {
        dis[i].disabled = true;}
}
function enable() {
    var dis = document.getElementById("list").getElementsByTagName("INPUT");
    for (var i = 0; i < dis.length; i++) {
        dis[i].disabled = false;}
    var dis = document.getElementById("list").getElementsByTagName("BUTTON");
    for (var i = 0; i < dis.length; i++) {
        dis[i].disabled = false;
    }
}

function done(){
    //var chkTarget = event.target;
    if (event.target.checked == true){
        var chkTarget = event.target,
            chked = chkTarget.parentElement.previousSibling;
        chked.setAttribute("Class","chked_txt");

        chkTarget.parentElement.parentElement.setAttribute("Class","chked_li");

        var dis = chkTarget.parentElement.getElementsByClassName("glyphicon glyphicon-pencil");
        for (var i=0; i<dis.length; i++) {
            dis[i].disabled = true;
        }
    }
    else {
        var unchkTarget = event.target,
            unchked = unchkTarget.parentElement.previousSibling;
        unchked.setAttribute("Class","");

        unchkTarget.parentElement.parentElement.setAttribute("Class","unChked_li");

        //var plusChkBox = document.getElementsByClassName("form-control");
        var dis = unchkTarget.parentElement.getElementsByClassName("glyphicon glyphicon-pencil");
        for (var i=0; i<dis.length; i++) {
            dis[i].disabled = false;
        }
    }
}