const dummyUser = {
  nickname: '제로초',
  Post: [],
  Followings: [],
  Followers: [],
  singUpData: {},
};

export const initialState = {
  isLoggedIn: false,
  user: null,

  imagePaths: [],
};

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: 'jinwoo',
  },
};
export const logoutAction = {
  type: LOG_OUT,
};
export const signUpAction = data => {
  return {
    type: SIGN_UP,
    data: data,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case Sign_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
