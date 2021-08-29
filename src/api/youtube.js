import axios from "axios";

const KEY = "AIzaSyDq2h9OBi_xwnw40SsL-lMoqKcpMnOf4xo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
