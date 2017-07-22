// Node modules import
import axios from 'axios';

// Actions types import
import { FETCH_QUESTION } from '../constants/questions.js';

// Receives a random question
export function fetchQuestion() {
  return function(dispatch) {
    return axios.get('http://jservice.io/api/random')
      .then(function(response) {
        dispatch({
          type: FETCH_QUESTION,
          payload: {
            id: response.data[0].id,
            category: response.data[0].category,
            question: response.data[0].question,
            answer: response.data[0].answer,
            value: response.data[0].value            
          }
        })
      })
  }
}