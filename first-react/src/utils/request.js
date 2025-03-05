import axios from "axios";

const request =axios.create({
    baseURL: 'http://localhost:5000/account_user',
    headers: {
        "Content-Type": "application/json",
      },
});
export default request;