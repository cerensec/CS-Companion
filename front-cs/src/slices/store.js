import { configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import contactReducer from './contactSlice';
import clientReducer from './clientSlice';
import supplierSlice from './supplierSlice';
import projectSlice from './projectSlice';

const store = configureStore({
    reducer:{
        user: userReducer,
        contact: contactReducer,
        client: clientReducer,
        supplier: supplierSlice,
        project: projectSlice
    },
});

export default store;