import { createStore } from 'redux';
import constants from './constants';

const initialState = [{
  user: null,
  inputValue: '',
  userName: '',
  showInput: false
}];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return Object.assign({}, state, { showInput: true});
    case constants.LOGOUT:
      return Object.assign({}, state, { userName: null});
    case constants.INPUT_CHANGE:
      return Object.assign({}, state, { inputValue: action.text });
    case constants.UPDATE_NAME:
      return Object.assign({}, state, { userName: state.inputValue,
                                        inputValue: '',
                                        showInput: false
                                      })
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;