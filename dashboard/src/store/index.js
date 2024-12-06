import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
const store = configureStore;({
    reducer : rootReducer,
    middleWare : getDefaultMiddlewarex  => {
        return getDefaultMiddlewarex({
            serializable : false
        })
    },
    devTools: true
})

export default store;
