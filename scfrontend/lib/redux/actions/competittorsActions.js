// actions/dataActions.js
import axios from 'axios';

export const fetchCompetitors = () => async dispatch => {
  try {
    const response = await axios.get('/api/kilpailijat');
    dispatch({ type: 'FETCH_COMPETITORS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_COMPETITORS_ERROR', payload: error.message });
  }
};

export const AddCompetitor = (name) => async dispatch => {
  try {
    const response = await axios.post('/api/data', { name });
    dispatch({ type: 'ADD_COMPETITOR_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_COMPETITOR_ERROR', payload: error.message });
  }
};

export const deleteData = (id) => async dispatch => {
  try {
    await axios.delete(`/api/data/${id}`);
    dispatch({ type: 'DELETE_COMPETITOR_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_COMPETITOR_ERROR', payload: error.message });
  }
};

// reducers/dataReducer.js
const initialState = {
  competitors: [],
  error: null,
};

const competitorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COMPETITORS_SUCCESS':
      return { ...state, competitors: action.payload, error: null };
    case 'FETCH_COMPETITORS_ERROR':
    case 'ADD_COMPETITOR_ERROR':
    case 'DELETE_COMPETITOR_ERROR':
      return { ...state, error: action.payload };
    case 'ADD_COMPETITOR_SUCCESS':
      return { ...state, competitors: [...state.kilpailijat, action.payload], error: null };
    case 'DELETE_COMPETITOR_SUCCESS':
      return { ...state, competitors: state.kilpailijat.filter(item => item.id !== action.payload), error: null };
    default:
      return state;
  }
};

export default competitorReducer;