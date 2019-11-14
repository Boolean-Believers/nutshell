const baseUrl = "http://localhost:8088"

const fetchFriendsData = {
    gettingMyBuddies: () => {
        return fetch(`${baseUrl}/user?_embed=friends`)
        .then(friends => ressponse.json())
    }
}

    export default fetchFriendsData
