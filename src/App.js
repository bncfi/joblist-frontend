import './App.css'
import jobsService from './services/jobsService'
import { useState, useEffect } from 'react'
import Jobslist from './components/Jobslist'
import Jobfilter from './components/Jobfilter'

function App() {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [searchTerms, setSearchTerms] = useState({
    searchword: null,
    location: null,
  })

  const fetchJobs = async () => {
    const jobsList = await jobsService.getAll()
    setJobs(jobsList)
    setFilteredJobs(jobsList)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Jobfilter
          jobs={jobs}
          searchTerms={searchTerms}
          setSearchTerms={setSearchTerms}
          setFilteredJobs={setFilteredJobs}
        />
        <Jobslist filteredJobs={filteredJobs} searchTerms={searchTerms} />
      </header>
    </div>
  )
}

export default App
