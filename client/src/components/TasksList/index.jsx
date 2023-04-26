import { connect } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import styles from './TasksList.module.sass';
import { useEffect, useState } from 'react';
import { deleteTasksThunk, getTasksThunk } from '../../store/slices/tasksSlice';

export const TasksList = ({ tasks, isFetching, error, get, remove }) => {
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <BeatLoader loading={isFetching} />
      {error && <div>!!!ERROR!!!</div>}
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {JSON.stringify(t)}
            <input
              type='checkbox'
              name='isDoneUpdate'
              // onChange={() => {
              //   update(p.id);
              // }}
            />
            <button
              onClick={() => {
                remove(t.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ tasksData }) => tasksData;

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getTasksThunk()),
  remove: id => dispatch(deleteTasksThunk(id)),
  // update: (id, data) => dispatch(updateTasksThunk(id, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
