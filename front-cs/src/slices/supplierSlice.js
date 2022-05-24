import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    suppliers: []
}

export const supplierSlice = createSlice({
    name:"supplier",
    initialState,
    reducers:{
        setSuppliers: (state,action) =>{
            state.suppliers = action.payload;
        },
    },
});

export const {setSuppliers} = supplierSlice.actions;

export const selectSuppliers = (state) => state.supplier.suppliers;

export default supplierSlice.reducer;