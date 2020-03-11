import starships from './services'

const getStarships = async () => {
  try {
    const res = await starships.get('')

    return res.data.results
  } catch (error) {
    return error
  }
}

export default {
  getStarships
}
