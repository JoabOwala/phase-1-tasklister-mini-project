document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
    form.addEventListener('submit',e =>{
    e.preventDefault()
    buildToDo(e.target.new_task_description.value)
    form.reset()
})
//Will delete task
function handleDelete(e){
    e.target.parentNode.remove()
}

function buildToDo(todo){
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'X'
    li.textContent = `${todo} `
    li.appendChild(btn)
    document.querySelector('#tasks').appendChild(li)
    
}
});
