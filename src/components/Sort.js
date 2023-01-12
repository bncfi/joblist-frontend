import Sortstyle from './Sortstyle.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { orderJobsNewest, orderJobsOldest } from '../reducers/jobsReducer'
import { useEffect } from 'react'

const Sort = ({ setOrder, order, filteredJobs, setFilteredJobs }) => {
  const dispatch = useDispatch()

  const handleSort = (event) => {
    if (event.target.value === 'newest') {
      setFilteredJobs(
        filteredJobs.sort(
          (a, b) => Date.parse(b.date_posted) - Date.parse(a.date_posted)
        )
      )
      dispatch(orderJobsNewest())
    } else {
      setFilteredJobs(
        filteredJobs.sort(
          (a, b) => Date.parse(a.date_posted) - Date.parse(b.date_posted)
        )
      )
      dispatch(orderJobsOldest())
    }
    setOrder(event.target.value)
  }
  return (
    <div>
      <button
        className={
          order === 'newest'
            ? Sortstyle.buttonOrderActive
            : Sortstyle.buttonOrder
        }
        onClick={handleSort}
        value="newest"
      >
        Uusin ensin
      </button>
      <button
        className={
          order === 'oldest'
            ? Sortstyle.buttonOrderActive
            : Sortstyle.buttonOrder
        }
        onClick={handleSort}
        value="oldest"
      >
        Vanhin ensin
      </button>
    </div>
  )
}

export default Sort
