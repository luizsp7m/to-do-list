import React, { useContext, useEffect, useState } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from '../../context/ThemeStore';
import { FaTrashAlt } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const { theme, toggle } = useContext(ThemeContext);

  const [filter, setFilter] = useState('all');

  const filters = ['all', 'active', 'completed'];

  const [tasksFiltered, setTasksFiltered] = useState([]);

  const [tasks, setTasks] = useState([]);

  const [task, setTask] = useState('');

  const [generateId, setGenerateId] = useState(0);

  function addNewTask(e) {
    e.preventDefault();

    if (task.trim() === '') {
      return;
    }

    setTasks([...tasks, {
      id: generateId,
      name: task,
      completed: false,
    }]);

    setGenerateId(generateId + 1);

    setTask('');

    toast.success('Added!');
  }

  function doneTask({ id, name, completed }) {
    const itensCopy = [];

    tasks.map(task => {
      task.id === id ? itensCopy.push({ id, name, completed: !completed }) : itensCopy.push(task);
    })

    setTasks(itensCopy);
  }

  function deleteTask({ id }) {
    const itensCopy = [];

    tasks.map(task => {
      task.id !== id && itensCopy.push(task);
    });

    setTasks(itensCopy);

    toast.error('Removed!');
  }

  function deleteAll() {
    const itensCopy = [];
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

    console.log(itensCopy);

    setTasksFiltered(itensCopy);
  }, [tasks, filter]);

  return (
    <Container>
      <ToastContainer />

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
          {tasksFiltered.map(task =>
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}
              doneTask={doneTask}
              deleteTask={deleteTask}
              filter={filter}
            />
          )}

          {filter === 'completed' && (
            <button onClick={deleteAll}>
              <FaTrashAlt size={16} color={'#fafafa'} />
              <span>delete all</span>
            </button>
          )}
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

function Task({ id, name, completed, doneTask, deleteTask, filter }) {
  return (
    <div className="list-item">
      <div
        className="list-item-content"
      >
        <input
          type="checkbox"
          checked={completed}
          onClick={() => doneTask({ id, name, completed })}
        />
        <span className={`${completed && 'completed'}`} >{name}</span>
      </div>

      { filter === 'completed' && (
        <div className="list-item-delete">
          <FaTrashAlt size={16} color={'#ccc'} onClick={() => deleteTask({ id })} />
        </div>
      )}
    </div>
  );
}

export default Home;