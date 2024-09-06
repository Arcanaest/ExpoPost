const postsContainer = document.querySelector(".posts-row");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((res) => renderPosts(res));

const renderPosts = (posts) => {
  posts.forEach(
    ({ id, userId, title, body }) =>
      (postsContainer.innerHTML += `<div class="col">
    <div class="card" style="width: 18rem">
      <img src="images/1.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
          ${body.length > 100 ? body.substring(0, 100) + "..." : body}
        </p>
        <a href="post.html" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>`)
  );
};

{
  /* <div class="col">
  <div class="card" style="width: 18rem">
    <img src="images/1.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
</div>; */
}
