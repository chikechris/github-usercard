/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/ axios
  .get(`https://api.github.com/users/dustinmyers`)
  .then(data => {
    // 1. (see above)
    // Handles Success: here's where we get the results from server
    // got 3 random doggos
    console.log("data:", data);
    const images = data.data.message;
    images.forEach(avatarurl => {
      // 2. (see above)
      const element = createGitHubCard(
        avatarurl,
        location,
        followers,
        following
      );
      // 3. (see above)
      entry.appendChild(element);
    });
  })
  .catch(error => {
    // Handles failure:
    console.log("ERROR", error);
  });

function createGitHubCard() {
  // create the elements
  //   <div class="card">
  //     <img src={image url of user} />
  //   <div class="card-info">
  //       <h3 class="name">{users name}</h3>
  //       <p class="username">{users user name}</p>
  //       <p>Location: {users location}</p>
  //       <p>Profile:
  //       <a href={address to users github page}>{address to users github page}</a>
  //     </p>
  //     <p>Followers: {users followers count}</p>
  //     <p>Following: {users following count}</p>
  //     <p>Bio: {users bio}</p>
  //   </div>
  // </div >
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfor = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const userUrl = document.createElement("a");
  const followers = document.createElement("h3");
  const following = document.createElement("p");

  // set the styles
  card.classList.add("card");
  img.classList.add("card-image");
  name.classList.add("name");
  username.classList.add("username");

  // set the content

  (img.src = avatarurl),
    (nameG.textContent =
      // put together
      card.appendChild(img));
  card.appendChild(title);
  return card;
}

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:



*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/