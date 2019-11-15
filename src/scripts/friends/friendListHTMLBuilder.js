import fetchFriendsData from "./friendsApiManager.js"
const friendsObject = {
    searchFriendBuilder() {
        return `<section id="search-friend-html">
        <label for="userFriends">Friends</label>
        <input id="friends-name" type="text">
        <button id="search-button">Search</button>
        
        </section>
        
        `
    },
    
    addNRemoveFriends() {
        return `<section id="edit-friends">
        <button id="add-button">ADD</button>
        <button id="delete-button">DELETE</button>
        </section>
        `
    },
    createFriendsList(friends) {
        return `
        <section>
          <h3>${friends}</h3>
        </section>
      `
    }
}


export default friendsObject