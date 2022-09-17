import './App.css'
import jobsService from './services/jobsService'
import { useState, useEffect } from 'react'
import Jobslist from './components/Jobslist'
import Jobfilter from './components/Jobfilter'
import Jobdetails from './components/Jobdetails'
import Sort from './components/Sort'

function App() {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [order, setOrder] = useState('newest')
  const [jobState, setJobState] = useState(false)

  const fetchJobs = async () => {
    const jobsList = await jobsService.getAll()
    const sortedJobs = jobsList.sort(
      (a, b) => Date.parse(b.date_posted) - Date.parse(a.date_posted)
    )
    setJobs(sortedJobs)
    setFilteredJobs(sortedJobs)
  }

  useEffect(() => {
    fetchJobs()
  }, [])
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
