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

  const [order, setOrder] = useState('newest')

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
      <header className="App-header">
        <Jobfilter
          jobs={jobs}
          searchTerms={searchTerms}
          setSearchTerms={setSearchTerms}
          filteredJobs={filteredJobs}
          setFilteredJobs={setFilteredJobs}
          order={order}
          setOrder={setOrder}
        />
        <Jobslist filteredJobs={filteredJobs} searchTerms={searchTerms} />
      </header>
    </div>
  )
}

export default App
