import React, { useState } from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';

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
        <div>
            <h2>Список задач</h2>
            <div>
                <label>Фильтр по статусу:</label>
                <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="Все">Все</option>
                    <option value="Не выполнена">Не выполнена</option>
                    <option value="В процессе">В процессе</option>
                    <option value="Выполнена">Выполнена</option>
                </select>
            </div>
            <div>
                <label>Фильтр по приоритету:</label>
                <select
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                >
                    <option value="Все">Все</option>
                    <option value="Низкий">Низкий</option>
                    <option value="Средний">Средний</option>
                    <option value="Высокий">Высокий</option>
                </select>
            </div>
            <div>
                <label>Поиск по названию:</label>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <ul>
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
