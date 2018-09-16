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

export const borrowBook = (dispatch,userId,isbn) => {
  const body = {userId,isbn};
  return axios.post('/borrowBook',body).then((response)=>{
    if(response.status === 200) {
      return dispatch({
        type:"BORROW_BOOK"
      })
    }
  }).catch(()=>{
    return dispatch({
      type: "INVALID_READER"
    })
  })
}
