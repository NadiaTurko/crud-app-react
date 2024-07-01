import axios from "axios";
const API = `https://64f84d3c824680fd217f6300.mockapi.io/list`;

const getTodo = () => axios(API).then(({ data }) => data);
// axios.put(api, item, {headers}).then(({data}) => data)

const changeTodoItem = (id, item) =>
  axios
    .put(API + `/${id}`, item, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then(({ data }) => data);

// axios.post(api, item, {headers}).then(({data}) => data)
const addTodoItem = (item) =>
  axios
    .post(API, item, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then(({ data }) => data);

// axios.delete(api).then(({data}) => data)
const deleteTodoItem = (id) =>
  axios.delete(API + `/${id}`).then(({ data }) => data);

export { getTodo, changeTodoItem, deleteTodoItem, addTodoItem };

// const API = `https://64f84d3c824680fd217f6300.mockapi.io/list`;

// const addTodoItem = (item) =>
//   fetch(API, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(item),
//   }).then((data) => data.json());

// const getTodo = () => fetch(API).then((data) => data.json());

// const changeTodoItem = (id, item) =>
//   fetch(API + `/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(item),
//   }).then((data) => data.json());

// const deleteTodoItem = (id) =>
//   fetch(API + `/${id}`, { method: `DELETE` }).then((data) => data.json());

// export { getTodo, changeTodoItem, deleteTodoItem, addTodoItem };
