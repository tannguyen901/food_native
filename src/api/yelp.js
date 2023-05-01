import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer j7_xSdMeq7ReQcPw1uwXE6OdjwoGLJHTzL4zik8QwNe4zkjtHmyLGLEaRiisovimWzfYOhodjhF52yDtm1W7Il7icoTvR48-4afm1GLocO0rQTdU4nta0KdUpBRHZHYx",
  },
});
