const postId = document.location.search.substring(8);
const postContainer = document.querySelector(".post");
const commentContainer = document.querySelector(".comments");
const counter = document.querySelector(".count_comments");

const getPost = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await res.json();

    const getComment = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments = await getComment.json();

    const count = comments.length;
    console.log(comments);
    const postData = post[0];
    postContainer.innerHTML = `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
            </div>
        `;
    counter.innerHTML = count;
    for (const comment of comments) {
      commentContainer.innerHTML += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${comment.title}</h5>
                        <p class="card-text">${comment.body}</p>
                    </div>
                </div>
            </div>
        `;
    }
  } catch (error) {
    console.error("Error fetching user or posts:", error);
    postContainer.innerHTML = "<p>Sorry, something went wrong.</p>";
    commentContainer.innerHTML = "<p>No comments available.</p>";
  }
};

getPost();


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
