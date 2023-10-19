import React, { useState } from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = ({ tasks }) => {
    const [filterStatus, setFilterStatus] = useState('Все');
    const [filterPriority, setFilterPriority] = useState('Все');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTasks = tasks.filter((task) => {
        if (filterStatus !== 'Все' && task.status !== filterStatus) {
            return false;
        }
        if (filterPriority !== 'Все' && task.priority !== filterPriority) {
            return false;
        }
        if (searchQuery && !task.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }
        return true;
    });

    return (
        <div className="container text-center mt-4">
            <h2 className="mb-4">Список задач</h2>
            <div className="form-group">
                <label className="m-4">Фильтр по статусу:</label>
                <select
                    className="form-control"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="Все">Все</option>
                    <option value="Не выполнена">Не выполнена</option>
                    <option value="В процессе">В процессе</option>
                    <option value="Выполнена">Выполнена</option>
                </select>
            </div>
            <div className="form-group">
                <label className="m-4">Фильтр по приоритету:</label>
                <select
                    className="form-control"
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                >
                    <option value="Все">Все</option>
                    <option value="Низкий">Низкий</option>
                    <option value="Средний">Средний</option>
                    <option value="Высокий">Высокий</option>
                </select>
            </div>
            <div className="form-group mb-4">
                <label className="m-4">Поиск по названию:</label>
                <input
                    type="text"
                    className="form-control"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <ul className="list-group">
                {filteredTasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);
