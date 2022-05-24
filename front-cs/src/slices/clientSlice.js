import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clients: [],
}

export const clientSlice = createSlice({
    name:"client",
    initialState,
    reducers: {
        setClients: (state,action) =>{
            state.clients = action.payload;
        },
    },
});

export const {setClients} = clientSlice.actions;

export const selectClients = (state) => state.client.clients;

export default clientSlice.reducer;