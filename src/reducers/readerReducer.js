const readerReducer = (state = { isNotAReader: false, readerId : null , reader : {firstName:"",lastName:""}}, action) => {
  switch (action.type) {
    case "INVALID_READER":
      return {
        ...state,
        isNotAReader:true
      }

    case "VALID_READER":
      return {
        ...state,
        readerId: action.readerId
      }

    case "SET_READER":
      return {
        ...state,
        reader:action.reader
      }

    default:
      return state;
  }
}

export default readerReducer;

