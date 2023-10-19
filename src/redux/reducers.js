const initialState = {
    tasks: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.task],
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.taskId),
            };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.task.id ? action.task : task
                ),
            };
        case 'TOGGLE_TASK_STATUS':
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.taskId
                        ? {...task, status: task.status === 'Выполнена' ? 'Не выполнена' : 'Выполнена'}
                        : task
                ),
            }
        case 'LOAD_TASKS':
            return {
                ...state,
                tasks: action.tasks,
            };
        default:
            return state;
    }
};

export default rootReducer;
