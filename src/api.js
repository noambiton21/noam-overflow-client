import axios from "axios";

export const createApiClient = () => {
  return {
    getQuestions: async (filter) => {
      const token = localStorage.getItem("token");

      return axios
        .get(`http://localhost:7000/api/question?filter=${filter || ""}`, {
          headers: { Authorization: token },
        })
        .then((res) => res.data);
    },
    getQuestion: async (id) => {
      const token = localStorage.getItem("token");
      return axios
        .get(`http://localhost:7000/api/question/${id}`, {
          headers: { Authorization: token },
        })
        .then((res) => res.data)
        .catch((err) => {
          console.log(err);
        });
    },
    addQuestion: async (content, title, tags) => {
      const token = localStorage.getItem("token");
      return axios
        .post(
          `http://localhost:7000/api/question`,
          {
            content: content,
            title: title,
            tags: tags,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then(function (response) {})
        .catch(function (error) {});
    },
    addAnswer: async (content, questionId) => {
      const token = localStorage.getItem("token");
      return axios
        .post(
          `http://localhost:7000/api/answer`,
          {
            content,
            questionId,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then(function (response) {
          if (response.status === 201) {
          }
        })
        .catch(function (error) {
          alert(error);
        });
    },
    loginUser: async (email, password) => {
      return axios
        .post(`http://localhost:7000/login`, {
          email,
          password,
        })
        .then(function (response) {
          if (response.status === 200) {
            localStorage.setItem("token", response.data.data);
          }
        })
        .catch(function (error) {
          alert(error);
        });
    },
    addScore: async (answerId, createdBy, newScore) => {
      const token = localStorage.getItem("token");
      return axios
        .post(
          `http://localhost:7000/api/score`,
          {
            answerId,
            createdBy,
            newScore,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then(function (response) {})
        .catch(function (error) {
          alert(error);
        });
    },
  };
};
