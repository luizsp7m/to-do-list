import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from '../../context/ThemeStore';
import { FaTrashAlt } from 'react-icons/fa';

function Home() {
  const { theme, toggle } = useContext(ThemeContext);

  const [filter, setFilter] = useState('all');

  const filters = ['all', 'active', 'completed'];

  const teste = [{
    id: 0,
    value: 'Jogar',
    completed: true,
  }, {
    id: 1,
    value: 'Jogar 2',
    completed: false,
  }, {
    id: 2,
    value: 'Jogar 3',
    completed: false,
  }]

  const [tasksFiltered, setTasksFiltered] = useState([]);

  const [tasks, setTasks] = useState(teste);

  const [task, setTask] = useState('');

  function addNewTask(e) {
    e.preventDefault();

    if (task.trim() === '') {
      return;
    }

    const itensCopy = Array.from(tasks);
    itensCopy.push({ id: tasks.length, value: task, completed: false });
    setTasks(itensCopy);
  }

  function doneTask(id, value, completed) {
    // console.log({ id, value, completed })

    const itensCopy = Array.from(tasks);
    itensCopy.splice(id, 1, { id: id, value: value, completed: !completed });
    setTasks(itensCopy);
  }

  useEffect(() => {
    const itensCopy = [];

    if (filter === 'completed') {
      tasks.map(task => {
        task.completed && itensCopy.push(task);
      });
    } else if (filter === 'active') {
      tasks.map(task => {
        !task.completed && itensCopy.push(task);
      });
    } else {
      tasks.map(task => {
        itensCopy.push(task);
      })
    }

    setTasksFiltered(itensCopy);
  }, [filter]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <Container>
      <h1 className="title">#todo</h1>

      <div className="content">
        <div className="filter">
          {filters.map((value, index) => (
            <div
              className={`filter-item ${value === filter && 'selected'}`}
              onClick={() => setFilter(value)}
              key={index}
            >{value}</div>
          ))}
        </div>

        <form onSubmit={addNewTask} className="form-group">
          <input
            type="text"
            placeholder="add details"
            onChange={e => setTask(e.target.value)}
            value={task}
          />

          <button type="submit">Add</button>
        </form>

        <div className="list">
          {tasksFiltered.map(task => (
            <Task
              key={task.id}
              id={task.id}
              value={task.value}
              completed={task.completed}
              doneTask={doneTask}
            />
          ))}
        </div>
      </div>

      <Switch
        onChange={toggle}
        onColor='#202C37'
        offColor='#ccc'
        checked={theme === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={30}
        handleDiameter={15}
      />
    </Container>
  );
}

function Task({ id, value, completed, doneTask }) {
  return (
    <div className="list-item">
      <div className="list-item-content">
        <input
          type="checkbox"
          onClick={() => doneTask(id, value, completed)}
        />
        <span className={`${completed && 'completed'}`} >{value}</span>
      </div>
    </div>
  );
}

export default Home;