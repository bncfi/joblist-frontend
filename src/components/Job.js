import Jobstyles from './Job.module.css'
import { useDispatch } from 'react-redux'
import { setJobState } from '../reducers/jobstateReducer'

const Job = ({ jobinfo }) => {
  const dispatch = useDispatch()

  const dateParser = (dateString) => {
    return new Intl.DateTimeFormat('fi-FI').format(new Date(dateString))
  }

  const jobDetailsHandle = (jobDetails) => {
    dispatch(setJobState(jobDetails))
  }

  return (
    <div className={Jobstyles.jobDiv} onClick={() => jobDetailsHandle(jobinfo)}>
      <div className={Jobstyles.jobHeading}>{jobinfo.heading}</div>
      <div className={Jobstyles.jobDetails}>
        {jobinfo.company_name}, julkaistu {dateParser(jobinfo.date_posted)}
      </div>
    </div>
  )
}

export default Job
