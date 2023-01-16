import './App.css'
import { useEffect } from 'react'
import Jobslist from './components/Jobslist'
import Jobfilter from './components/Jobfilter'
import Jobdetails from './components/Jobdetails'
import Sort from './components/Sort'
import { useDispatch, useSelector } from 'react-redux'
import { initializeJobs } from './reducers/jobsReducer'
import { setFilteredJobs } from './reducers/filteredjobsReducer'

function App() {
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs)
  const jobState = useSelector((state) => state.jobState)

  useEffect(() => {
    dispatch(initializeJobs())
  }, [dispatch])

  useEffect(() => {
    dispatch(setFilteredJobs(jobs))
  }, [dispatch, jobs])

  return (
    <div className="App">
      <div className="App-headerblock">
        <div className="App-headerblock-sides"></div>
        <div className="App-headerblock-filter">
          <Jobfilter />
        </div>
        <div className="App-headerblock-sides"></div>
      </div>
      <Sort />
      {jobState ? <Jobdetails /> : <Jobslist />}
    </div>
  )
}

export default App
