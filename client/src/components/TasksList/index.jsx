import { connect } from 'react-redux';
import BeatLoader from 'react-spinners/BeatLoader';
import styles from './TasksList.module.sass';
import { useEffect, useState } from 'react';
import { getTasksThunk } from '../../store/slices/tasksSlice';

export const TasksList = ({ tasks, isFetching, error, get }) => {
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <BeatLoader loading={isFetching} />
      {error && <div>!!!ERROR!!!</div>}
      <ul>
        {tasks.map(t => (
          <li key={t.id}>{JSON.stringify(t)}</li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ tasksData }) => tasksData;

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getTasksThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
