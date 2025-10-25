import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersState {
  list: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UsersState = {
  list: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: User[] = await res.json();
    return data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Terjadi kesalahan.";
      });
  },
});

export default usersSlice.reducer;
