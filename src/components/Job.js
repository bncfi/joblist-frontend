import { useState } from 'react'
import Jobstyles from './Job.module.css'

const Job = ({ jobinfo }) => {
  const [showDescr, setShowDescr] = useState(false)

  const dateParser = (dateString) => {
    const dateWithDash = dateString.split(' ', 1)
    const dateWithoutDash = dateWithDash[0].split('-')
    return (
      dateWithoutDash[2] + '.' + dateWithoutDash[1] + '.' + dateWithoutDash[0]
    )
  }

  const showWhenTrue = { display: showDescr ? '' : 'none' }

  const toggleShow = () => {
    setShowDescr(!showDescr)
  }

  return (
    <div className={Jobstyles.jobDiv}>
      <div className={Jobstyles.jobHeading}>{jobinfo.heading}</div>
      <div className={Jobstyles.jobDetails}>
        {jobinfo.company_name}, julkaistu {dateParser(jobinfo.date_posted)}
      </div>
      <div style={showWhenTrue}>{jobinfo.descr}</div>
    </div>
  )
}

export default Job
