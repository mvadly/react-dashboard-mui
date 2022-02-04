import { createSlice } from "@reduxjs/toolkit";

const registerStepSlice = createSlice({
    name: "registerStep",
    initialState: {
        norekGiro: "",
        companyName: "",
        companyAlias: "",
        companyAddress: "",
        emailAdmin: "",
        emailVerifikator: ["email@example.com"],
        giroOK: false,
        companyOK: false,
        emailOK: false,
    },
    reducers: {
        updateGiro: (state, action) => {
            state.norekGiro = action.payload.norekGiro;
            state.giroOK = action.payload.giroOK;
        },
        updateCompany: (state, action) => {
            state.companyName = action.payload.companyName;
            state.companyAlias = action.payload.companyAlias;
            state.companyAddress = action.payload.companyAddress;
            state.companyOK = action.payload.companyOK;
        },
        updateEmail: (state, action) => {
            state.emailAdmin = action.payload.emailAdmin;
            state.emailVerifikator = action.payload.emailVerifikator;
            state.emailOK = action.payload.emailOK;
        },
    }
})

export const { updateGiro, updateCompany, updateEmail } = registerStepSlice.actions
export default registerStepSlice.reducer