import { useState } from 'react'

const Job = ({ jobinfo }) => {
  const [showDescr, setShowDescr] = useState(false)

  const description = {
    fontSize: 12,
  }

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
    <div>
      <div onClick={toggleShow}>
        {jobinfo.heading}, {jobinfo.company_name}
        <div>julkaistu {dateParser(jobinfo.date_posted)}</div>
      </div>
      <div style={{ ...showWhenTrue, ...description }}>{jobinfo.descr}</div>
    </div>
  )
}

export default Job
