document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.forms[0]
  const text = form.querySelector("#new-task-description")
  const priority = form.querySelector("#priority")
  const due = form.querySelector("#due-date")

  form.addEventListener("submit", updateToDo)

  function updateToDo(event){
    event.preventDefault()

    let ul = document.querySelector("#tasks")

    let li = document.createElement("li")
    let deleteBtn = document.createElement("button")

    //delete task functionality
    deleteBtn.addEventListener("click", deleteTask)

    //set text content value for the button and list element

    li.textContent = `Task:${text.value} | Due:${due.value}`
    deleteBtn.textContent = "X"

    //set color based on priority
    let chosenColor = priority.value
    if (chosenColor==="red"){
      li.style.color = "red"
    }
    else if(chosenColor==="yellow"){
      li.style.color = "#fcba03"
    }
    else{
      li.style.color = "green"
    }

    //style delete button
    deleteBtn.style.margin = "5px"
    deleteBtn.style.color = "red"

    //append button to li element then append list to ul element
    li.appendChild(deleteBtn)
    ul.appendChild(li)

    //set input field to empty after submit
    form.reset()

  }

  function deleteTask(e){
    e.target.parentNode.remove()
  }

});