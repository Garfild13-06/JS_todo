const form = document.forms[0]
const tasks__input = form.querySelector('.tasks__input')
const tasks__list = document.querySelector('.tasks__list')

if (localStorage.getItem('tasks__list') != null) {
    tasks__list.outerHTML = localStorage.getItem('tasks__list')
}
tasks__list.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('task_remove')) {
        e.target.parentElement.remove()
        localStorage.setItem('tasks__list', tasks__list.outerHTML)
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    div__new_task = document.createElement('div')
    div__new_task.classList.add('task')

    div__new_task__title = document.createElement('div')
    div__new_task__title.classList.add('task__title')
    div__new_task__title.innerText = tasks__input.value


    a__task_remove = document.createElement('a')
    a__task_remove.href = '#'
    a__task_remove.classList.add('task_remove')
    a__task_remove.innerHTML = '&times;'

    tasks__list.appendChild(div__new_task)
    div__new_task.appendChild(div__new_task__title)
    div__new_task.appendChild(a__task_remove)

    form.reset()
    localStorage.setItem('tasks__list', tasks__list.outerHTML)
})