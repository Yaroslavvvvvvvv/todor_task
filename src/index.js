import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskList from './components/TaskList';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddTask from "./components/AddTask";
import { loadTasks } from './redux/actions';

store.dispatch(loadTasks());

store.subscribe(() => {
    const state = store.getState();
    const { tasks } = state;
    localStorage.setItem('tasks', JSON.stringify(tasks));
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AddTask />
        <TaskList />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
