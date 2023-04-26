import React from 'react';
import TasksList from '../../components/TasksList';
import TaskForm from '../../components/forms/TaskForm';

function TaskPage () {
  return (
    <section>
      <h2>Task Form</h2>
      <TaskForm />
      <TasksList />
    </section>
  );
}

export default TaskPage;
