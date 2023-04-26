import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from './../../api';

const TASKS_SLICE_NAME = 'tasks';

export const getTasksThunk = createAsyncThunk(
  `${TASKS_SLICE_NAME}/get`,
  async (payload, thunkAPI) => {
    try {
      const response = await API.getTasks();
      return response.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

export const createTasksThunk = createAsyncThunk(
  `${TASKS_SLICE_NAME}/post`,
  async (payload, thunkAPI) => {
    try {
      const response = await API.createTask(payload);
      return response.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const tasksSlice = createSlice({
  name: TASKS_SLICE_NAME,
  initialState,
  extraReducers: builder => {
    //GET
    builder.addCase(getTasksThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getTasksThunk.fulfilled, (state, action) => {
      state.isFetching = false;
      state.tasks = [...action.payload];
    });
    builder.addCase(getTasksThunk.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
    //CREATE
    builder.addCase(createTasksThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(createTasksThunk.fulfilled, (state, action) => {
      state.isFetching = false;
      state.tasks.push(action.payload);
    });
    builder.addCase(createTasksThunk.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});

const { reducer } = tasksSlice;

export default reducer;
