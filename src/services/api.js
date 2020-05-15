import {post, get} from './../utils/httpUtils'

const translateUrl = 'https://translation.googleapis.com/language/translate/v2'

const test = function (url, data) {
  return post(url, data).then(res => {
    console.log(' < ==== res ==== > ')
    console.log(res)
    console.log(' < ==== res ==== > ')
    return res
  })
}

const translateText = async function (data) {
  let {q, source, target} = data
  const googleKey = 'AIzaSyBYJlispBkRCRN3IbTbIBp6kZAfBnfZU8w'
  q = q.replace(/\n/g, '%0A')
  let callTranslateUrl = translateUrl + '?key=' + googleKey + '&q=' + q + '&source=' + source + '&target=' + target
  return get(callTranslateUrl).then(res => {
    const {data} = res
    console.log(' < ================ translateText  ================ >')
    console.log(data.data)
    console.log(' < ================ translateText  ================ >')
    return data.data
  })
}

export {
  test,
  translateText
}
