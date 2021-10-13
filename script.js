let addBtn = document.querySelector('#push');
let userInput = document.querySelector('#newtask input');
let tasks = document.querySelector('#tasks');

function addTodo() {
    tasks.innerHTML += `
        <div class="task">
        <span id="taskname"> ${userInput.value} </span>
        <button class="delete">
        <i class="far fa-trash-alt"></i> 
        </button>
        </div>`;

    let deleteBtns = document.querySelectorAll('.delete');
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
        })
    })

    let noOfTasks = document.querySelectorAll('.task');
    noOfTasks.forEach((task) => {
        task.addEventListener('click', () => {
            task.classList.toggle('completed');
        })
    })

    document.querySelector('#newtask input').value = '';
}

addBtn.addEventListener('click', () => {
    if (userInput.value.length != 0) {
        addTodo()
    }
});

addBtn.addEventListener('keyup', (e) => {
    if (userInput.value.length != 0 && e.key == 'Enter') {
        addTodo();
    }
});