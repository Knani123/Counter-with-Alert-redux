import { ADD, MINUS, RESET } from "../action/type";
const initState = { counter: 0 };
const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return { counter: state.counter + action.payload };
    case MINUS:
      return { counter: state.counter - action.payload };
    case RESET:
      return { counter: 0 };

    default:
      return state;
  }
};

export default counterReducer;
