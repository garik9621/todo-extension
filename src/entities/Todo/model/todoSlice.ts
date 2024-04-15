import {createSlice} from "@reduxjs/toolkit";
import {ITodoItem} from "@entities/Todo";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [] as ITodoItem[]
    },
    reducers: {
        addItem: (state, { payload }) => {
            state.items.push({
                id: `${Math.floor(Math.random() * 999999)}`,
                label: payload,
                done: false,
                creationDate: `${Date.now()}`
            });
        },
        deleteItem: (state, { payload }) => {
            state.items = [...state.items].filter(item => item.id !== payload);
        },
        updateItem: (state, { payload }) => {
            const targetItemIndex = state.items.findIndex(item => item.id === payload.id);

            if (!state.items[targetItemIndex]) {
                return;
            }

            state.items[targetItemIndex] = {...payload};
        }
    }
});

export const { addItem, deleteItem, updateItem }  = todoSlice.actions;

export default todoSlice.reducer;