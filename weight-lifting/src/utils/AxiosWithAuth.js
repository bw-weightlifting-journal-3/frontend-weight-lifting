import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://bw-weightlifting-journal.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};

export default axiosWithAuth;
