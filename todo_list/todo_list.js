function todofunction(){

    // localStorage.setItem("todos",JSON.stringify(todos))
    let text = ""
    let input = document.querySelector("input").value;
    let todos2 = JSON.parse(localStorage.getItem("todos"))
    todos2.push(input[0].toUpperCase()+input.slice(1))
    localStorage.setItem("todos2", JSON.stringify(todos2));
    for(todo of todos2){
    text += `<li class=" w-50 my-4 shadow bg-white rounded px-3 py-3 ">
        <i class="fas fa-circle text-white btn"></i>
        <span class="m-2 tt">${todo}</span>
        </li>`;}
        document.getElementsByTagName("ol")[0].innerHTML = text
}
let input = document.querySelector("input");
