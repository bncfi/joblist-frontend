import Sortstyle from './Sortstyle.module.css'

const Sort = ({ setOrder, order, filteredJobs, setFilteredJobs }) => {
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
