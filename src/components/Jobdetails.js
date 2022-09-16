import Jobdetailstyles from './Jobdetails.module.css'

const Jobdetails = ({ jobState, setJobState }) => {
  const descriptionParse = (description) => {
    return description.split('\n').map((newString) => <p>{newString}</p>)
  }

  const closeViewHandle = () => {
    setJobState(false)
  }

  return (
    <div className={Jobdetailstyles.container}>
      <div onClick={closeViewHandle}>
        &laquo;Takaisin ilmoituksiin
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
