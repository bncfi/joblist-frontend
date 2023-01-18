import Jobsliststyles from './Jobslist.module.css'
import { useSelector } from 'react-redux'
import Paginatedjobs from './Paginatedjobs'

const Jobslist = () => {
  const filteredJobs = useSelector((state) => state.filteredJobs)

  return (
    <div className={Jobsliststyles.container}>
      <h2>Haulla löytyi {filteredJobs.length} tulosta.</h2>
      <div id="joblist">
        <Paginatedjobs itemsPerPage={15} />
      </div>
    </div>
  )
}

export default Jobslist
