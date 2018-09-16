import { axiosInstance as axios } from '../axios-wrapper/axios.config';

export const fetchBooks = (dispatch) => {
  return axios.get(`/allBooks`).then((response) => {
    return dispatch(
      {
        type: "GET_BOOKS",
        payload: response.data
      }
    )
  })
}
