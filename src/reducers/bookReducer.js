const bookReducer = (state = { borrowUnsuccessful : false,borrowSuccessful : false}, action) => {
  switch (action.type) {
    case 'BORROW_BOOK':
      return {
        ...state,
        borrowSuccessful:true
      }

    case "INVALID_READER":
      return {
        ...state,
        borrowUnsuccessful:true
      }

    default:
      return state;
  }
}

export default bookReducer;

