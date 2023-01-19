import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Paginationstyles from './Paginatedjobs.module.css'
import Paginatedslice from './Paginatedslice'
import { setCurrentPage } from '../reducers/paginationPagestate'
import { setcurrentJobs } from '../reducers/paginationCurrentReducer'
import { setItemOffset } from '../reducers/paginationItemOffset'
import { setPageCount } from '../reducers/paginationPagecount'

const Paginatedjobs = ({ itemsPerPage }) => {
  const filteredJobs = useSelector((state) => state.filteredJobs)
  const currentJobs = useSelector((state) => state.currentJobs)
  const currentPage = useSelector((state) => state.currentPage)
  const itemOffset = useSelector((state) => state.itemOffset)
  const pageCount = useSelector((state) => state.pageCount)

  const dispatch = useDispatch()

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    dispatch(setcurrentJobs(filteredJobs.slice(itemOffset, endOffset)))
    dispatch(setPageCount(Math.ceil(filteredJobs.length / itemsPerPage)))
  }, [itemOffset, itemsPerPage, filteredJobs])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredJobs.length

    dispatch(setItemOffset(newOffset))
    dispatch(setCurrentPage(event.selected))
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
        forcePage={currentPage}
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
