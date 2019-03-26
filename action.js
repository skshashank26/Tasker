function add_task() {
    var i=Math.floor(Math.random()*Math.floor(500));

    var work=document.getElementById('task').value;                          //Save input from user
    var text_node=document.createTextNode(work);

    if(!work.trim())                                                        //Check if user entered value is empty or not
    {
        alert("A task requires something to do ;)\ntry adding some text...");
        return;
    }

    var task_list=document.createElement("ul");                             //Create an unordered list
    task_list.setAttribute("type","none");

    var create_task=document.createElement("INPUT");                       //Create A CHECKBOX
    create_task.setAttribute("type","checkbox");
    create_task.setAttribute("id",i);
    create_task.setAttribute("onclick","task_done(this)");

    var checkbox_name=document.createElement("label");                    //Create a label(user entered task) for checkbox 
    checkbox_name.appendChild(text_node);
    checkbox_name.setAttribute("for",i);
    checkbox_name.setAttribute("id",i);

    task_list.appendChild(checkbox_name);                               //Append label to unordered list
    task_list.appendChild(create_task);                                 //Append CHECKBOX to unordered list
    document.getElementById("div1").appendChild(task_list);             //Append all elements to div

}

function task_done(t) {
    var x=t.id;
    console.log(x);
    console.log(document.getElementById(x));
    document.getElementById(x).setAttribute("class","strike");
}

function clear_field() {
    document.getElementById('task').value=null;
}

function detect(e) {

    if(e.keyCode==13)
    {
        add_task();
        clear_field();
    }
}