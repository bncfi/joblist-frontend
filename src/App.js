import './App.css'
import { useState, useEffect } from 'react'
import Jobslist from './components/Jobslist'
import Jobfilter from './components/Jobfilter'
import Jobdetails from './components/Jobdetails'
import Sort from './components/Sort'
import { useDispatch, useSelector } from 'react-redux'
import { initializeJobs } from './reducers/jobsReducer'
import { setFilteredJobs } from './reducers/filteredjobsReducer'

function App() {
  const [order, setOrder] = useState('newest')
  const [jobState, setJobState] = useState(false)

  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs)
  const filteredJobs = useSelector((state) => state.filteredJobs)

  useEffect(() => {
    dispatch(initializeJobs())
  }, [dispatch])

  useEffect(() => {
    dispatch(setFilteredJobs(jobs))
  }, [dispatch, jobs])

  return (
    <div className="App">
      <div className="App-headerblock">
        <div className="App-headerblock-sides duunitori-logo"></div>
        <div className="App-headerblock-filter">
          <Jobfilter
            jobs={jobs}
            setFilteredJobs={setFilteredJobs}
            setOrder={setOrder}
          />
        </div>
        <div className="App-headerblock-sides"></div>
      </div>
      <Sort
        filteredJobs={filteredJobs}
        setFilteredJobs={setFilteredJobs}
        order={order}
        setOrder={setOrder}
      />
      {jobState ? (
        <Jobdetails jobState={jobState} setJobState={setJobState} />
      ) : (
        <Jobslist
          filteredJobs={filteredJobs}
          jobState={jobState}
          setJobState={setJobState}
        />
      )}
    </div>
  )
}

export default App
