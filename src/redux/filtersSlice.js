import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    status: statusFilters.all,
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
