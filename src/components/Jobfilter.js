const Jobfilter = ({
  jobs,
  searchTerms,
  setSearchTerms,
  filteredJobs,
  setFilteredJobs,
  order,
  setOrder,
}) => {
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
    <div>
      <form onSubmit={handleFilter}>
        <div>
          <input
            type="text"
            id="searchword"
            placeholder="Etsi työpaikkaa, yritystä tai alaa"
            onChange={({ target }) =>
              setSearchTerms({ ...searchTerms, searchword: target.value })
            }
          />
        </div>
        <div>
          <input
            type="text"
            id="location"
            placeholder="Sijainti"
            onChange={({ target }) =>
              setSearchTerms({ ...searchTerms, location: target.value })
            }
          />
        </div>
        <button id="submit-button" type="submit">
          Etsi
        </button>
      </form>
      <div>
        <input
          type="radio"
          name="options"
          id="newfirst"
          value="newest"
          checked={order === 'newest'}
          onChange={handleSort}
        />
        <label htmlFor="newfirst">Uusin ensin</label>

        <input
          type="radio"
          name="options"
          id="oldfirst"
          value="oldest"
          checked={order === 'oldest'}
          onChange={handleSort}
        />
        <label htmlFor="oldfirst">Vanhin ensin</label>
      </div>
    </div>
  )
}
export default Jobfilter
