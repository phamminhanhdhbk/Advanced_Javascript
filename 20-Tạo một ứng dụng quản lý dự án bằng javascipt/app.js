document.addEventListener('DOMContentLoaded', function() {
    const projectForm = document.getElementById('project-form');
    const projectNameInput = document.getElementById('project-name');
    const projectsContainer = document.getElementById('projects-container');

    projectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const projectName = projectNameInput.value;
        if (projectName) {
            addProject(projectName);
            projectNameInput.value = '';
        }
    });

    function addProject(projectName) {
        const project = {
            id: generateId(),
            name: projectName,
            tasks: []
        };
        saveProject(project);
        renderProject(project);
    }

    function renderProject(project) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h2>${project.name}</h2>
            <ul id="tasks-${project.id}" class="tasks"></ul>
            <form class="task-form">
                <input type="text" class="task-input" placeholder="Add Task">
                <button type="submit">Add</button>
            </form>
        `;
        projectsContainer.appendChild(projectElement);

        const taskForm = projectElement.querySelector('.task-form');
        const taskInput = projectElement.querySelector('.task-input');

        taskForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const taskName = taskInput.value;
            if (taskName) {
                const task = { id: generateId(), name: taskName, completed: false };
                project.tasks.push(task);
                saveProject(project);
                renderTask(project.id, task);
                taskInput.value = '';
            }
        });

        project.tasks.forEach(task => renderTask(project.id, task));
    }

    function renderTask(projectId, task) {
        const taskList = document.getElementById(`tasks-${projectId}`);
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span>${task.name}</span>
            <button class="delete-task">Delete</button>
        `;
        taskList.appendChild(taskItem);

        const checkbox = taskItem.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function() {
            task.completed = !task.completed;
            saveProject(getProjectById(projectId));
        });

        const deleteButton = taskItem.querySelector('.delete-task');
        deleteButton.addEventListener('click', function() {
            const index = getTaskIndex(projectId, task.id);
            if (index !== -1) {
                getProjectById(projectId).tasks.splice(index, 1);
                saveProject(getProjectById(projectId));
                taskItem.remove();
            }
        });
    }

    function generateId() {
        return Math.random().toString(36).substr(2, 9);
    }

    function saveProject(project) {
        localStorage.setItem(`project-${project.id}`, JSON.stringify(project));
    }

    function getProjectById(projectId) {
        return JSON.parse(localStorage.getItem(`project-${projectId}`));
    }

    function getTaskIndex(projectId, taskId) {
        const project = getProjectById(projectId);
        return project.tasks.findIndex(task => task.id === taskId);
    }

    // Load projects from localStorage when the page loads
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('project-')) {
            const project = JSON.parse(localStorage.getItem(key));
            renderProject(project);
        }
    }
});
