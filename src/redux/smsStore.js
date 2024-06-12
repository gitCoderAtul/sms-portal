import { configureStore } from "@reduxjs/toolkit";
import groupSlice from "./slices/groupSlice";
import contactSlice from "./slices/contactSlice";
import librarySlice from "./slices/librarySlice";
import messageSlice from "./slices/message.Slice";

export const smsStore = configureStore({
    reducer :{
        group:groupSlice,
        contact:contactSlice,
        library:librarySlice,
        message:messageSlice
    }
})
 