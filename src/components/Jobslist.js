import Job from './Job'
import Jobsliststyles from './Jobslist.module.css'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

const Jobslist = ({ filteredJobs, jobState, setJobState }) => {
  const Jobs = ({ currentJobs }) => {
    return (
      <>
        {currentJobs &&
          currentJobs.map((item) => (
            <Job key={item.id} jobinfo={item} setJobState={setJobState} />
          ))}
      </>
    )
  }

  const PaginatedJobs = ({ itemsPerPage }) => {
    const [currentJobs, setcurrentJobs] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage
      setcurrentJobs(filteredJobs.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(filteredJobs.length / itemsPerPage))
    }, [itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filteredJobs.length
      setItemOffset(newOffset)
    }

    return (
      <>
        <Jobs currentJobs={currentJobs} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="&raquo;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="&laquo;"
          renderOnZeroPageCount={null}
          activeClassName={Jobsliststyles.paginationActive}
          previousLinkClassName={Jobsliststyles.paginationLinks}
          nextLinkClassName={Jobsliststyles.paginationLinks}
        />
      </>
    )
  }

  return (
    <div className={Jobsliststyles.container}>
      <h2>Haulla löytyi {filteredJobs.length} tulosta.</h2>
      <PaginatedJobs itemsPerPage={15} />
    </div>
  )
}

export default Jobslist
