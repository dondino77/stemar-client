import { createAction } from "@reduxjs/toolkit";
import { TypeLoader } from "./types";

export const showLoader = createAction<TypeLoader, 'common/showLoader'>('common/showLoader');
export const hideLoader = createAction<void, 'common/hideLoader'>('common/hideLoader');