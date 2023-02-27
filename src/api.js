import axios from "axios";

const { VUE_APP_API_URL } = process.env;

export const postSignUp = ({
    email, password, password2, username
}) => axios.post(VUE_APP_API_URL + "/sign-up", {
    email,
    password,
    password2,
    username
})

export const postSignIn = ({
    email, password
}) => axios.post(VUE_APP_API_URL + "/login", {
    email, password
})