import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000' });

export const getUsers = () => httpClient.get('/api/users?limit=100&offset=0');

export const createUser = data => httpClient.post('/api/users', data);

export const getTasks = () => httpClient.get('/api/tasks?limit=100&offset=0');

export const createTask = data => httpClient.post('/api/tasks', data);

export const updateTasks = (taskId, data) =>
  httpClient.patch(`/api/tasks/${taskId}`, data);

export const deleteTask = taskId => httpClient.delete(`/api/tasks/${taskId}`);
