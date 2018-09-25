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

export const validateReader = (dispatch, readerId) => {
  const body = { readerId};
  return axios.post('/validateReader', body).then((response)=>{
    if(response.status == 200){
      return dispatch({
        type:"VALID_READER",
        readerId
      })
    }
  }).catch(() => {
    return dispatch({
      type: "INVALID_READER"
    })
  })
}


export const fetchReaderInfo = (dispatch,readerId) =>{
  console.log(readerId);
  return axios.get(`/readerInfo/${readerId}`).then((response)=>{
    if(response.status == 200){
      return dispatch({
        type:"SET_READER",
        reader: response.data.reader
      })
    }
  })
}
