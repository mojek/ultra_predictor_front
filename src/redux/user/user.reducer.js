const INIT_STATE = {
  currentUser: null,
  token: null
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload.user,
        token: action.payload.token
      };

    default:
      return state;
  }
};

export default userReducer;
