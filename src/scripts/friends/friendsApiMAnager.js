const baseUrl = "http://localhost:8088"

const fetchFriendsData = {
    gettingMyBuddies: () => {
        return fetch(`${baseUrl}/friends/?_embed=users`)
        .then(friends => friends.json())
    }
}

    export default fetchFriendsData
