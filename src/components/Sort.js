import Sortstyle from './Sortstyle.module.css'
import { useDispatch } from 'react-redux'
import {
  orderFilteredNewest,
  orderFilteredOldest,
} from '../reducers/filteredjobsReducer'

const Sort = ({ setOrder, order, filteredJobs, setFilteredJobs }) => {
  const dispatch = useDispatch()

  const handleSort = (event) => {
    if (event.target.value === 'newest') {
      dispatch(orderFilteredNewest())
    } else {
      dispatch(orderFilteredOldest())
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
