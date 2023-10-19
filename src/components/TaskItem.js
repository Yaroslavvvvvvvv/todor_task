import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, editTask, toggleTaskStatus } from '../redux/actions';

const TaskItem = ({ task, deleteTask, editTask, toggleTaskStatus }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTask(editedTask);
        setIsEditing(false);
    };

    const handleDelete = () => {
        deleteTask(task.id);
    };

    const handleToggleStatus = () => {
        toggleTaskStatus(task.id);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({ ...editedTask, [name]: value });
    };

    return (
        <li className="list-group-item">
            {isEditing ? (
                <div>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        value={editedTask.title}
                        onChange={handleInputChange}
                    />
                    <button
                        className="btn btn-primary"
                        onClick={handleSave}>Сохранить</button>
                </div>
            ) : (
                <div>
                    <strong>Название:</strong> {task.title}<br/>
                    <strong>Описание:</strong> {task.description}<br/>
                    <strong>Приоритет:</strong> {task.priority}<br/>
                    <strong>Статус:</strong> {task.status}<br/>
                    <button
                        className="btn btn-warning"
                        onClick={handleEdit}>Редактировать</button>
                    <button
                        className="btn btn-danger"
                        onClick={handleDelete}>Удалить</button>
                    <button
                        className="btn btn-info"
                        onClick={handleToggleStatus}>
                        {task.status === 'Выполнена' ? 'Отметить как не выполнена' : 'Отметить как выполнена'}
                    </button>
                </div>
            )}
        </li>
    );
};

export default connect(null, { deleteTask, editTask, toggleTaskStatus })(TaskItem);



