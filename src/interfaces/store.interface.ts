import { Slice } from "@reduxjs/toolkit";

export interface IStore {
    auth: Slice<any>,
    popup: Slice
}