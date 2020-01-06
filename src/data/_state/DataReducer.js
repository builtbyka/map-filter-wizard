
import data from '../properties';

const reducer = (state = { all: data, filtered: data }, action) => {
  switch (action.type) {
    case 'UPDATE_FILTERED_DATA':
      return { ...state, filtered: action.updated };
    default:
      return state;
  }
};

export default reducer;
