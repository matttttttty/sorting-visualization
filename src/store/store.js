import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bubbleSort";

export default configureStore({ reducer });
