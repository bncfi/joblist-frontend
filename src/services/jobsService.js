import axios from 'axios'

const baseUrl = 'http://localhost:3001/jobs'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const jobsService = {
  getAll,
}

export default jobsService
