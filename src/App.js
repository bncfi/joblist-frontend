import './App.css'
import jobsService from './services/jobsService'
import { useState, useEffect } from 'react'
import Jobslist from './components/Jobslist'

function App() {
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    const jobsList = await jobsService.getAll()
    setJobs(jobsList)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Jobslist jobs={jobs} />
        </p>
      </header>
    </div>
  )
}

export default App
