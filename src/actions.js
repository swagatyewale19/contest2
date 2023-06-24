export const login = (user) => {
    return {
      type: 'LOGIN',
      payload: user,
    };
  };
  const initialState = {
    user: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;