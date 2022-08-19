
import axios from 'axios'
export { fetchImages }

axios.defaults.baseURL = 'https://pixabay.com/api/'
const KEY = '29364826-4e6f286d031cc6f5a71007dd6'

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  )
  return response
}