const Jobfilter = ({ jobs, searchTerms, setSearchTerms, setFilteredJobs }) => {
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
    setFilteredJobs(jobs.filter(searchwordFilter).filter(locationFilter))
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
    </div>
  )
}
export default Jobfilter
