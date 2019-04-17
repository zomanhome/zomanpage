import { combineReducers } from "redux";

import { photos } from "./photos";
import { photo } from "./photo";

export const rootReducer = combineReducers({ photos, photo });
