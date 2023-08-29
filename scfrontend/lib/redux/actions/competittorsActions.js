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

export const AddCompetitor = (competitor) => async dispatch => {
  try {
    const response = await axios.post('/api/kilpailijat', competitor );
    dispatch({ type: 'ADD_COMPETITOR_SUCCESS', payload: response.data });
    dispatch(fetchCompetitors());
  } catch (error) {
    dispatch({ type: 'ADD_COMPETITOR_ERROR', payload: error.message });
  }
};

export const deleteComptetitor = (id) => async dispatch => {
  try {
    await axios.delete(`/api/kilpailijat/${id}`);
    dispatch({ type: 'DELETE_COMPETITOR_SUCCESS', payload: id });
    dispatch(fetchCompetitors());
  } catch (error) {
    dispatch({ type: 'DELETE_COMPETITOR_ERROR', payload: error.message });
  }
};

export const editCompetitor = (id, competitor) => async dispatch => {
  try {
    const response = await axios.put(`/api/kilpailijat/${id}`, competitor );
    dispatch({ type: 'EDIT_COMPETITOR_SUCCESS', payload: response.data });
    dispatch(fetchCompetitors());
  } catch (error) {
    dispatch({ type: 'EDIT_COMPETITOR_ERROR', payload: error.message });
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
    case 'EDIT_COMPETITOR_ERROR':
      return { ...state, error: action.payload };
    case 'ADD_COMPETITOR_SUCCESS':
      return { ...state, competitors: [...state.kilpailijat, action.payload], error: null };
    case 'DELETE_COMPETITOR_SUCCESS':
      return { ...state, competitors: state.kilpailijat.filter(item => item.id !== action.payload), error: null };
      case 'EDIT_COMPETITOR_SUCCESS':
        return { ...state, competitors: [...state.kilpailijat, action.payload], error: null };
    default:
      return state;
  }
};

export default competitorReducer;