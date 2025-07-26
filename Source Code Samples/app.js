(() => {
  'use strict';

  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  const TASKS_KEY = 'todo-tasks';

  const loadTasks = () => {
    try {
      const tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
      return Array.isArray(tasks) ? tasks : [];
    } catch {
      return [];
    }
  };

  const saveTasks = (tasks) => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  };

  const createTaskElement = (task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    
    const span = document.createElement('span');
    span.textContent = task.text;
    span.addEventListener('click', () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks(tasks);
      renderTasks();
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '🗑';
    removeBtn.title = 'Delete task';
    removeBtn.addEventListener('click', () => {
      tasks.splice(index, 1);
      saveTasks(tasks);
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    return li;
  };

  let tasks = loadTasks();

  const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach((task, i) => {
      const li = createTaskElement(task, i);
      taskList.appendChild(li);
    });
  };

  addTaskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (!text) return;
    tasks.push({ text, completed: false });
    saveTasks(tasks);
    taskInput.value = '';
    renderTasks();
  });

  taskInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      addTaskBtn.click();
    }
  });

  renderTasks();
})();
