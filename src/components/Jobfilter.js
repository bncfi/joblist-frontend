import Filterstyle from './Filter.module.css'
import { useState } from 'react'
import { setFilteredJobs } from '../reducers/filteredjobsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { setOrder } from '../reducers/orderReducer'
import { setCurrentPage } from '../reducers/paginationPagestate'
import { setItemOffset } from '../reducers/paginationItemOffset'

const Jobfilter = () => {
  const jobs = useSelector((state) => state.jobs)
  const dispatch = useDispatch()

  const [searchTerms, setSearchTerms] = useState({
    searchword: null,
    location: null,
  })

  const locationFilter = (job) => {
    if (searchTerms.location) {
      return (
        job.municipality_name.toLowerCase() ===
        searchTerms.location.toLowerCase()
      )
    } else {
      return job
    }
  }

  const searchwordFilter = (job) => {
    if (searchTerms.searchword) {
      return job.descr
        .toLowerCase()
        .includes(searchTerms.searchword.toLowerCase())
    } else {
      return job
    }
  }

  const handleFilter = (event) => {
    event.preventDefault()
    //These are called to reset the Pagination settings
    dispatch(setCurrentPage(0))
    dispatch(setItemOffset(0))

    dispatch(
      setFilteredJobs(jobs.filter(searchwordFilter).filter(locationFilter))
    )
    dispatch(setOrder('newest'))
  }

  return (
    <div className={Filterstyle.container}>
      <form onSubmit={handleFilter}>
        <div className={Filterstyle.formStyle}>
          <div className={Filterstyle.searchForm}>
            <input
              className={Filterstyle.inputField}
              type="text"
              id="searchword"
              placeholder="Etsi työpaikkaa, yritystä tai alaa"
              onChange={({ target }) =>
                setSearchTerms({ ...searchTerms, searchword: target.value })
              }
            />
          </div>
          <div className={Filterstyle.locationForm}>
            <input
              className={Filterstyle.inputField}
              type="text"
              id="location"
              placeholder="Sijainti"
              onChange={({ target }) =>
                setSearchTerms({ ...searchTerms, location: target.value })
              }
            />
          </div>
          <div className={Filterstyle.searchButtonDiv}>
            <button
              className={Filterstyle.searchButton}
              id="submit-button"
              type="submit"
            >
              Etsi
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Jobfilter
