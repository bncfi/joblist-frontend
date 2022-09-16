import Filterstyle from './Filter.module.css'
import { useState } from 'react'

const Jobfilter = ({
  jobs,
  filteredJobs,
  setFilteredJobs,
  order,
  setOrder,
}) => {
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
    setFilteredJobs(
      jobs
        .filter(searchwordFilter)
        .filter(locationFilter)
        .sort((a, b) => Date.parse(b.date_posted) - Date.parse(a.date_posted))
    )
    setOrder('newest')
  }

  const handleSort = (event) => {
    if (event.target.value === 'newest') {
      setFilteredJobs(
        filteredJobs.sort(
          (a, b) => Date.parse(b.date_posted) - Date.parse(a.date_posted)
        )
      )
    } else {
      setFilteredJobs(
        filteredJobs.sort(
          (a, b) => Date.parse(a.date_posted) - Date.parse(b.date_posted)
        )
      )
    }
    setOrder(event.target.value)
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
      <button
        className={
          order === 'newest'
            ? Filterstyle.buttonOrderActive
            : Filterstyle.buttonOrder
        }
        onClick={handleSort}
        value="newest"
      >
        Uusin ensin
      </button>
      <button
        className={
          order === 'oldest'
            ? Filterstyle.buttonOrderActive
            : Filterstyle.buttonOrder
        }
        onClick={handleSort}
        value="oldest"
      >
        Vanhin ensin
      </button>
    </div>
  )
}
export default Jobfilter
