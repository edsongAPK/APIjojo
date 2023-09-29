import axios from "axios";

export const api = axios.create({
    baseURL: "https://stand-by-me.herokuapp.com/api/v1/characters"
}
)