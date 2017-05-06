var userInput = document.getElementById("task");
//var taskId = document.getElementById("list").getElementsByTagName("LI");
//console.log(taskId.value);
function condition(){
    if(document.getElementById("btnAddTask").innerText=="Add Task"){
        addTask();
    }
    else{
        update();
    }
}
function addTask() {

     var para = document.createElement("P"),
         list = document.createElement("LI"),
         ranNum = (Math.random()*100000000).toString(),
         id = ranNum.substring(0, 8);

    //list.innerHTML = userInput.value;
    para.innerHTML = userInput.value;
    userInput.value="";
    var tasks = document.getElementById("list");
    tasks.appendChild(list);
    list.appendChild(para);
    list.setAttribute("id", id);
    var btnX = document.createElement("BUTTON"),
        btnXVal = document.createTextNode("X"),
        btnEdit = document.createElement("BUTTON"),
        btnEditVal = document.createTextNode("Edit");

    btnX.appendChild(btnXVal);
    list.appendChild(btnX);
    btnX.setAttribute('onclick','del(event)');

    btnEdit.appendChild(btnEditVal);
    list.appendChild(btnEdit);
    btnEdit.setAttribute('onclick','edit(event)');



}


function del() {
    var target = event.target,
        parentTarget = target.parentElement;
        parentTarget.remove();
}


function edit() {
    //console.log(event)
    /*steps
     * 1) Store id of LI in a variable, lets say var taskId = '234234df'
     * 2) Get element of AddTaskBtn in a variable, var addTaskBtn = <elementcode>
     * 3) change the value to addTaskBtn to 'update'
     * 4) Also set taskId to addTaskBtn as an attribute.
     * */
    var target = event.target,
        parentTarget = target.parentElement,
        listTargetId = parentTarget.id,
        addTaskButton = document.getElementById("btnAddTask");
    addTaskButton.innerText = "Update";
    addTaskButton.setAttribute("task_id", listTargetId);
    //console.log(listTargetId);
    //var taskId = document.getElementById("list");
    //console.log(taskId);
    //var listId = taskId.getElementsByTagName("LI");
    //console.log(listId[0].id);
    var editTarget = event.target,
        parentTarget = editTarget.parentElement,
        pTxt = (parentTarget.getElementsByTagName("P")),
        InputBtn = document.getElementById("btnAddTask").innerText = "Update",
        valPTxt = (pTxt[0].innerText);
    //console.log(InputBtn);
    //console.log(userInput.innerText);
    userInput.value = valPTxt;

}
function update(){

        var updateTarget = event.target,
            id_list = updateTarget.getAttribute("task_id"),
            list_txt = document.getElementById(id_list);
            //console.log(userInput);
            list_txt.children[0].innerText = userInput.value;
            document.getElementById("btnAddTask").innerText = "Add Task";
            userInput.value="";



        //document.getElementById()
        //console.log(document.getElementById("id").getElementsByTagName("p"));
}
