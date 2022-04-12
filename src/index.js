document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.forms[0]
  let text = form.querySelector("#new-task-description")
  let priority = form.querySelector("#priority")

  form.addEventListener("submit",(event) =>{

    event.preventDefault()

    let ul = document.querySelector("#tasks")

    let li = document.createElement("li")
    let deleteBtn = document.createElement("button")

    //delete task functionality
    deleteBtn.addEventListener("click", deleteTask)

    //set text content value for the button and list element

    li.textContent = text.value
    deleteBtn.textContent = "X"

    //set color based on priority
    let chosenColor = priority.value
    if (chosenColor==="red"){
      li.style.color = "red"
    }
    else if(chosenColor==="yellow"){
      li.style.color = "yellow"
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
  })

  function deleteTask(e){
    e.target.parentNode.remove()
  }

});