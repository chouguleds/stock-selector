
const bluemixService = require('./bluemix.service')
const _ = require('lodash')


const _getArticleScore = function (tones) {

  let score = 1

  if(!tones || tones.length === 0) {

    score = 0.5
    return score
  }

  _.forEach(tones, function (tone) {

    if (tone.tone_id === 'sadness') {

      score *= -1
      score *= tone.score
    } else if (tone.tone_id === 'anger') {

      score *= -1
      score *= tone.score
    } else if (tone.tone_id === 'fear') {

      score *= -1
      score *= tone.score
    } else if (tone.tone_id === 'tentative') {

      score *= tone.score
    } else if (tone.tone_id === 'joy') {

      score *= tone.score
    } else if (tone.tone_id === 'confident') {

      score *= tone.score
    } else if (tone.tone_id === 'analytical') {

      score *= tone.score
    }
  })
  return score
}

const getSentiment = async function (text) {

  let sentiment = await bluemixService.getSentiment(text)
 const tones = sentiment.document_tone.tones

  score = _getArticleScore(tones)

  return score
}

module.exports = {
  getSentiment
}