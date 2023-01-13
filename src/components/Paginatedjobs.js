import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Job from './Job'
import Jobsliststyles from './Jobslist.module.css'

const Paginatedjobs = ({ itemsPerPage, setJobState }) => {
  const [currentJobs, setcurrentJobs] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  const filteredJobs = useSelector((state) => state.filteredJobs)

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

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setcurrentJobs(filteredJobs.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(filteredJobs.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, filteredJobs])

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

export default Paginatedjobs
