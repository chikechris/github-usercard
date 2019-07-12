const entry = document.querySelector(".cards");

axios
  .get(`https://api.github.com/users/chikechris`)
  .then(res => {
    console.log("gitHub infor:", res);
    const gitData = res.data;
    console.log(myData);
    const gitCard = createGitHubCard(gitData);
    entry.appendChild(gitCard);
  })

  .catch(error => {
    // Handles failure:
    console.log("ERROR", error);
  });

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
const followersArray = [
  "tetondan",
  " dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];
followersArray.forEach(follower => {
  axios
    .get(`https://api.github.com/users/${follower}`)
    .then(res => {
      console.log("Github info: ", res);
      const gitData = res.data;
      console.log(gitData);
      const gitCard = createGitHubCard(gitData);
      entry.appendChild(gitCard);
    })
    .catch(error => {
      console.log("ERROR", error);
    });
});

function createGitHubCard(gitHubUser) {
  const card = document.createElement("div");
  const imgUser = document.createElement("img");
  const cardInfor = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const userUrl = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  //setting up structure element
  card.appendChild(imgUser);
  card.appendChild(cardInfor);

  cardInfor.appendChild(name);
  cardInfor.appendChild(username);
  cardInfor.appendChild(location);
  cardInfor.appendChild(profile);

  cardInfor.appendChild(followers);
  cardInfor.appendChild(following);
  cardInfor.appendChild(bio);

  // set the classList and attributes

  card.classList.add("card");
  cardInfor.classList.add("card-infor");
  imgUser.src = gitHubUser.avatar_url;
  userUrl.href = gitHubUser.html_url;
  name.classList.add("name");
  username.classList.add("username");

  // set the content
  name.textContent = gitHubUser.name;
  username.textContent = gitHubUser.login;
  Location.textContent = `Location: ${gitHubUser.location}`;
  userUrl.textContent = gitHubUser.html_url;
  profile.textContent = "Profile: ";
  profile.appendChild(userUrl);
  followers.textContent = `Followers: ${gitHubUser.followers}`;
  following.textContent = `Following:  ${gitHubUser.following}`;
  bio.textContent = `Bio: ${gitHubUser.bio}`;

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

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:



*/
