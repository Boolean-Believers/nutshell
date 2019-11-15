import friendsObject from "./friendListHTMLBuilder.js"
import fetchFriendsData from "./friendsApiMAnager.js"

const friendsDomRef = document.getElementById("friends-container")

const friendsOnTheDom = {

    renderSearchFriend: () => {
        const friendsDomRef = document.getElementById("friends-container")
       return friendsDomRef.innerHTML += friendsObject.searchFriendBuilder()
    },
    editFriends: () => {
        const friendsDomRef = document.getElementById("friends-container")
        return friendsDomRef.innerHTML += friendsObject.addNRemoveFriends()
    },
    listOfFriends: () => {
        const friendsDomRef = document.getElementById("friends-container")
        fetchFriendsData.gettingMyBuddies()
        .then(friends => friendsObject.createFriendsList(friends))
    }
}
export default friendsOnTheDom