import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "31a9b12337ed4757adf044340bd7f033",
  },
});

  // The key will be included in the query string of every HTTP request connecting to the backend