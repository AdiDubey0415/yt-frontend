let authState = {
  isLoggedIn: false,
  name: "",
  email: "",
  mobile: ""
}

export function authReducer(state = authState, action) {
  console.log("Authreducer", action);
  let stateCopy = {...state};
  switch(action.type) {
    case "LOGIN":
      // stateCopy.isLoggedIn = true;
      // stateCopy.name = action.payload.name;
      // stateCopy.email = action.payload.email;
      // stateCopy.mobile = action.payload.mobile;
      return stateCopy;

    default:
      return state;
  }
}
