import friendsObject from "./friendListHTMLBuilder.js"
import fetchFriendsData from "./friendsApiMAnager.js"

const friendsDomRef = document.getElementById("container")

const friendsOnTheDom = {

    renderSearchFriend: () => {
       return friendsDomRef.innerHTML += friendsObject.searchFriendBuilder()
    },
    editFriends: () => {
        return friendsDomRef.innerHTML += friendsObject.addNRemoveFriends()
    },
    listOfFriends: () => {
        return friendsDomRef.innerHTML += fetchFriendsData.gettingMyBuddies()
        .then(friends => friendsObject.createFriendsList(friends))
    }
}
export default friendsOnTheDom