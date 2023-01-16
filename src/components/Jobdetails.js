import Jobdetailstyles from './Jobdetails.module.css'
import { setJobState } from '../reducers/jobstateReducer'
import { useDispatch, useSelector } from 'react-redux'

const Jobdetails = (/*{ jobState, setJobState }*/) => {
  const dispatch = useDispatch()
  const jobState = useSelector((state) => state.jobState)

  const descriptionParse = (description) => {
    return description.split(/\n+/).map((newString, index) => (
      <p key={index}>
        {newString}
        <br />
      </p>
    ))
  }

  const closeViewHandle = () => {
    dispatch(setJobState(false))
  }

  return (
    <div className={Jobdetailstyles.container}>
      <div className={Jobdetailstyles.backToListing} onClick={closeViewHandle}>
        &laquo;Takaisin ilmoituksiin
        <br />
        <br />
      </div>
      <div className={Jobdetailstyles.heading}>
        {jobState.heading}
        <br />
      </div>
      <div className={Jobdetailstyles.description}>
        {descriptionParse(jobState.descr)}
      </div>
    </div>
  )
}

export default Jobdetails
