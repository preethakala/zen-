import axios from 'axios';

// Register User Action
export const registerUser = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5000/api/users/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
  }
};

// Login User Action
export const loginUser = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5000/api/users/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
  }
};
 