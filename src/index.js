import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import jobsReducer from './reducers/jobsReducer'
import orderReducer from './reducers/orderReducer'
import jobstateReducer from './reducers/jobstateReducer'
import filteredjobsReducer from './reducers/filteredjobsReducer'
import ThunkMiddleware from 'redux-thunk'
import paginationCurrentReducer from './reducers/paginationCurrentReducer'
import paginationPageState from './reducers/paginationPagestate'
import paginationItemOffset from './reducers/paginationItemOffset'
import paginationPageCount from './reducers/paginationPagecount'

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    order: orderReducer,
    jobState: jobstateReducer,
    filteredJobs: filteredjobsReducer,
    currentJobs: paginationCurrentReducer,
    currentPage: paginationPageState,
    itemOffset: paginationItemOffset,
    pageCount: paginationPageCount,
  },
  middleware: [ThunkMiddleware],
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
