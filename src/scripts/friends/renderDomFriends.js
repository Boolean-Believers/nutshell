import friendsObject from "./friendListHTMLBuilder.js"


const friendsDomRef = document.getElementById("container")

const friendsOnTheDom = {

    renderSearchFriend: () => {
       return friendsDomRef.innerHTML += friendsObject.searchFriendBuilder()
    },
    editFriends: () => {
        return friendsDomRef.innerHTML += friendsObject.addNRemoveFriends()
    }
}
export default friendsOnTheDom