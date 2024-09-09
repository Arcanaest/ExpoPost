const userId = document.location.search.substring(4);
const userContainer = document.querySelector(".user");
const postContainer = document.querySelector(".posts");
const counter = document.querySelector(".count");

const getUser = async () => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users?id=${userId}`
    );
    const user = await res.json();

    const getPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = await getPost.json();

    const count = posts.length;
    const userData = user[0];
    userContainer.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-name">${userData.name}</h5>
                <p class="card-username">${userData.username}</p>
                <p class="card-email">${userData.email}</p>
                <p class="card-phone">${userData.phone}</p>
                <p class="card-website">${userData.website}</p>
            </div>
        </div>
    `;
    counter.innerHTML = count;
    console.log(posts)
    for (const post of posts) {
      postContainer.innerHTML += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                        <a href="post.html?postId=${post.id}" class="btn btn-primary">Go to post</a>
                    </div>
                </div>
            </div>
        `;
    }
  } catch (error) {
    console.error("Error fetching user or posts:", error);
    userContainer.innerHTML = "<p>Sorry, something went wrong.</p>";
    postContainer.innerHTML = "<p>No posts available.</p>";
  }
};

getUser();

/* <div class="card">
    <div class="card-body">
      <h5 class="card-name">Leanne Graham</h5>
      <p class="card-username">Bret</p>
      <p class="card-email">Sincere@april.biz</p>
      <p class="card-phone">1-770-736-8031 x56442</p>
      <p class="card-website">hildegard.org</p>
    </div>
  </div> */

/* <div class="col">
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>
    <a href="#" class="btn btn-primary">Go to post</a>
  </div>
</div>
</div> */
