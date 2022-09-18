import axios from "axios";
const serverUrl = "https://noam-overflow-backend.herokuapp.com";

export const createApiClient = () => {
  return {
    getQuestions: async (filter) => {
      const token = localStorage.getItem("token");

      return axios
        .get(`${serverUrl}/api/question?filter=${filter || ""}`, {
          headers: { Authorization: token },
        })
        .then((res) => res.data);
    },
    getQuestion: async (id) => {
      const token = localStorage.getItem("token");
      return axios
        .get(`${serverUrl}/api/question/${id}`, {
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
          `${serverUrl}/api/question`,
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
          `${serverUrl}/api/answer`,
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
        .post(`${serverUrl}/login`, {
          email,
          password,
        })
        .then((res) => res)
        .catch(function (error) {
          alert(error);
        });
    },
    addScore: async (answerId, newScore) => {
      const token = localStorage.getItem("token");
      return axios
        .post(
          `${serverUrl}/api/score`,
          {
            answerId,
            newScore,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => res.status)
        .catch((err) => {
          console.log(err);
        });
    },
  };
};
