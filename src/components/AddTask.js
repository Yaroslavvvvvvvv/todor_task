import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';


const AddTask = ({ addTask }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: 'Низкий',
        status: 'Не выполнена',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleAddTask = () => {
        addTask(task);
        setTask({
            title: '',
            description: '',
            priority: 'Низкий',
            status: 'Не выполнена',
        });
    };

    return (
        <div>
            <h2>Добавить задачу</h2>
            <input
                type="text"
                name="title"
                placeholder="Название"
                value={task.title}
                onChange={handleInputChange}
            />
            <textarea
                name="description"
                placeholder="Описание"
                value={task.description}
                onChange={handleInputChange}
            />
            <select
                name="priority"
                value={task.priority}
                onChange={handleInputChange}
            >
                <option value="Низкий">Низкий</option>
                <option value="Средний">Средний</option>
                <option value="Высокий">Высокий</option>
            </select>
            <select
                name="status"
                value={task.status}
                onChange={handleInputChange}
            >
                <option value="Не выполнена">Не выполнена</option>
                <option value="В процессе">В процессе</option>
                <option value="Выполнена">Выполнена</option>
            </select>
            <button onClick={handleAddTask}>Добавить</button>
        </div>
    );
};

export default connect(null, { addTask })(AddTask);
