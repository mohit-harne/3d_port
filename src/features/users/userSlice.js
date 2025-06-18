import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../supabaseClient';

// Async actions
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
});

export const addUser = createAsyncThunk('users/addUser', async ({ name, age }) => {
  const { data, error } = await supabase.from('users').insert([{ name, age }]);
  if (error) throw error;
  return data[0];
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add
      .addCase(addUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default userSlice.reducer;
