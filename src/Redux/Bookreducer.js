import { buyBook } from "./BookType";

const initialState = {
  NoOfBooks: 20,
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case buyBook:
      return {
        ...state,
        NoOfBooks: state.NoOfBooks - 1,
      };
      break;

    default:
      return state;
  }
};
export default reducer;
