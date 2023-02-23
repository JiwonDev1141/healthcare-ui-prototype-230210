import axios from "axios";

export const postSignUp = ({
    email, password, password2, username
}) => axios.post("http://localhost:3000/sign-up", {
    email,
    password,
    password2,
    username
})