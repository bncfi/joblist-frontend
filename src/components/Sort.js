import Sortstyle from './Sortstyle.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  orderFilteredNewest,
  orderFilteredOldest,
} from '../reducers/filteredjobsReducer'
import { setOrder } from '../reducers/orderReducer'

const Sort = () => {
  const dispatch = useDispatch()
  const order = useSelector((state) => state.order)

  const handleSort = (event) => {
    if (event.target.value === 'newest') {
      dispatch(orderFilteredNewest())
    } else {
      dispatch(orderFilteredOldest())
    }
    dispatch(setOrder(event.target.value))
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
