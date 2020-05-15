import axios from 'axios'

const post = async function (url, data) {
  axios.post(url, data)
    .then(
      res => {
        console.log('response : ' + res)
        return res
      })
    .catch(error => {
      console.log(error)
      return error
    })
}

const get = async function (url) {
  return axios.get(url)
    .then(
      async (res) => {
        return res
      }
    ).catch(error => {
      console.log(error)
      return error
    })
}

export {
  post,
  get
}
