import { configureStore } from "@reduxjs/toolkit";

import {
  adminAuthReducer,
  adminCartReducer,
  adminPaymentReducer,
  adminProductReducer,
  adminUserReducer,
  adminOrderReducer,
} from "./admin/reducer";

const store = configureStore({
  reducer: {
    adminAuthReducer,
    adminCartReducer,
    adminOrderReducer,
    adminPaymentReducer,
    adminProductReducer,
    adminUserReducer
  },
});

export default store;
