import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
}

export const contactSlice = createSlice({
    name:"contact",
    initialState,
    reducers: {
        setContacts: (state,action) =>{
            state.contacts = action.payload;
        },
    },
});

export const {setContacts} = contactSlice.actions;

export const selectContacts = (state) => state.contact.contacts;

export default contactSlice.reducer;