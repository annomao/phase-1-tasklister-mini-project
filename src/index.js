document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.forms[0]
  let text = form.querySelector("#new-task-description")

  form.addEventListener("submit",(event) =>{

    event.preventDefault()

    //retrieve ul element
    let ul = document.querySelector("#tasks")

    //create li and button elements
    let li = document.createElement("li")
    let deleteBtn = document.createElement("button")

    //delete task functionality
    deleteBtn.addEventListener("click", deleteTask)

    //set text content value for the button and list element
    li.textContent = text.value
    deleteBtn.textContent = "X"

    //style delete button
    deleteBtn.style.margin = "5px"
    deleteBtn.style.color = "red"

    //append button to li element then append list to ul element
    li.appendChild(deleteBtn)
    ul.appendChild(li)

    //set input field to empty after submit
    text.value = ""
  })

  function deleteTask(e){
    e.target.parentNode.remove()
  }
});