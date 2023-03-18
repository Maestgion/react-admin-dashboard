import axios from "axios"

const BASE_URL = "http://localhost:8000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q2OTIyMjNjZDE2OGY0ZWE0MTZhNjIiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NzYxNzQyMjd9.to-y87UzScmxk0-8Ke9EmTw7-IGbL-N5mD7YnhpBfVY"

export const publicRequest=axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token : TOKEN}
})