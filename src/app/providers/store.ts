import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from "@entities/Todo";

export default configureStore({
    reducer: {
        todo: todoReducer
    }
})