import axios from "axios";

export default axios.create({
    baseURL: "https://daily-quote-two-point-o.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
})