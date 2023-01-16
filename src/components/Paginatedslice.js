import Job from './Job'

const Paginatedslice = ({ currentJobs }) => {
  return (
    <>
      {currentJobs &&
        currentJobs.map((item) => <Job key={item.id} jobinfo={item} />)}
    </>
  )
}

export default Paginatedslice
