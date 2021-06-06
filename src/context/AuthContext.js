import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        isSignedIn: true,
      };
    case 'signout':
      return {
        ...state,
        email: '',
        password: '',
        isSignedIn: false,
      };
    default:
      return state;
  }
};

const signin = dispatch => {
  return ({email, password}) => {
    dispatch({type: 'signin', payload: {email, password}});
  };
};
const signout = dispatch => {
  return () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout},
  {isSignedIn: false, email: '', password: ''},
);
