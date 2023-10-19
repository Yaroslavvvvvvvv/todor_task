export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        task,
    };
};

export const deleteTask = (taskId) => {
    return {
        type: 'DELETE_TASK',
        taskId,
    };
};

export const editTask = (task) => {
    return {
        type: 'EDIT_TASK',
        task,
    };
};

export const toggleTaskStatus = (taskId) => {
    return {
        type: 'TOGGLE_TASK_STATUS',
        taskId,
    };
};
export const loadTasks = () => {
    try {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        return {
            type: 'LOAD_TASKS',
            tasks: storedTasks,
        };
    } catch (error) {
        console.error('Ошибка при загрузке задач из localStorage:', error);
        // В случае ошибки при разборе JSON можно вернуть пустой массив или другое значение по умолчанию
        return {
            type: 'LOAD_TASKS',
            tasks: [],
        };
    }
};


export const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};