import Job from './Job'
import Jobsliststyles from './Jobslist.module.css'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

const Jobslist = ({ filteredJobs, searchTerms }) => {
  const Jobs = ({ currentJobs }) => {
    return (
      <>
        {currentJobs &&
          currentJobs.map((item) => <Job key={item.id} jobinfo={item} />)}
      </>
    )
  }

  const PaginatedJobs = ({ itemsPerPage }) => {
    // We start with an empty list of items.
    const [currentJobs, setcurrentJobs] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage
      setcurrentJobs(filteredJobs.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(filteredJobs.length / itemsPerPage))
    }, [itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
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
