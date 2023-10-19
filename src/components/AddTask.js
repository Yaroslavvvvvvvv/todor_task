import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTask} from '../redux/actions';


const AddTask = ({addTask}) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: 'Низкий',
        status: 'Не выполнена',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setTask({...task, [name]: value});
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
        <div className="container text-center mt-4">
            <h2 className="mb-4">Добавить задачу</h2>
            <div className="form-group mb-4">
                <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Название"
                    value={task.title}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group mb-4">
                <textarea
                    name="description"
                    className="form-control"
                    placeholder="Описание"
                    value={task.description}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group mb-4">
                <select
                    className="form-control"
                    name="priority"
                    value={task.priority}
                    onChange={handleInputChange}
                >
                    <option value="Низкий">Низкий</option>
                    <option value="Средний">Средний</option>
                    <option value="Высокий">Высокий</option>
                </select>
            </div>
            <div className="form-control mb-4">
                <select
                    className="form-control"
                    name="status"
                    value={task.status}
                    onChange={handleInputChange}
                >
                    <option value="Не выполнена">Не выполнена</option>
                    <option value="В процессе">В процессе</option>
                    <option value="Выполнена">Выполнена</option>
                </select>
            </div>
            <button className="btn btn-primary" onClick={handleAddTask}>Добавить</button>
        </div>
    );
};

export default connect(null, {addTask})(AddTask);
