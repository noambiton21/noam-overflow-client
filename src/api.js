import axios from "axios";

export const createApiClient = () => {
  return {
    getQuestions: async (filter) => {
      const token = localStorage.getItem("token");
      console.log(token);
      return axios
        .get(`http://localhost:7000/api/question?filter=${filter || ""}`, {
          headers: { Authorization: token },
        })
        .then((res) => res.data);
    },
  };
};
