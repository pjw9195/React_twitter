export const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: '진우',
      },
      content: '첫번째',
      img:
        'data:image/png;base64,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',
    },
  ],
  imagePaths: [],
};

export const ADD_POST = 'ADD_POST';
export const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
  type: ADD_POST,
};

const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: 'Hello',
    UserId: 1,
    User: {
      nickname: '제로초',
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return { ...state };
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
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
