const baseUrl = "http://localhost:8088"

export default {
    getAllEvents: () => fetch(`${baseUrl}/events`)
        .then(response => response.json())
        .then(response => console.log(response))
}