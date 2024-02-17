export const initialState = {
  isLogged:localStorage.getItem("token"),
  token:localStorage.getItem("islogged"),
  userDetails:JSON.parse(localStorage.getItem("userDetails"))
}