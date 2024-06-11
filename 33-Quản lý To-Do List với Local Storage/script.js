document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    };

    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll('li').forEach(task => {
            tasks.push({
                text: task.textContent.replace('Delete', '').trim(),
                completed: task.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const addTaskToDOM = (text, completed = false) => {
        const li = document.createElement('li');
        li.textContent = text;
        if (completed) {
            li.classList.add('completed');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });

        li.appendChild(deleteButton);
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });

        taskList.appendChild(li);
    };

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTaskToDOM(taskText);
            saveTasks();
            taskInput.value = '';
        }
    });

    loadTasks();
});
