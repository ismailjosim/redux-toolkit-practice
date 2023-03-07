import productReducer from './reducers/productReducer';

const { configureStore } = require('@reduxjs/toolkit');


const store = configureStore({
    reducer: {
        products: productReducer,

    }
})

export default store;
