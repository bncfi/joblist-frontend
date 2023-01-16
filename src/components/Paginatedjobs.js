import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Paginationstyles from './Paginatedjobs.module.css'
import Paginatedslice from './Paginatedslice'

const Paginatedjobs = ({ itemsPerPage }) => {
  const [currentJobs, setcurrentJobs] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const filteredJobs = useSelector((state) => state.filteredJobs)

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
      <Paginatedslice currentJobs={currentJobs} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="&raquo;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="&laquo;"
        renderOnZeroPageCount={null}
        activeClassName={Paginationstyles.paginationActive}
        previousLinkClassName={Paginationstyles.paginationLinks}
        nextLinkClassName={Paginationstyles.paginationLinks}
      />
    </>
  )
}

export default Paginatedjobs
