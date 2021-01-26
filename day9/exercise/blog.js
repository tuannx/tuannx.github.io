"use strict";
(function () {

  window.onload = function () {
    let startBtn = document.getElementById("createBtn");
    let accountTxt = document.getElementById("accountId");
    let profileDiv = document.getElementById("profile");
    let postsDiv = document.getElementById("posts");
    startBtn.onclick = function () {
      this.disabled = true;
      fetch(`https://jsonplaceholder.typicode.com/users/${accountTxt.value}`)
          .then(res => res.json())
          .then(buildProfile)
          .catch(console.error);
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${accountTxt.value}`)
          .then(res => res.json())
          .then(buildPosts)
          .catch(console.error);
    }
    accountTxt.onkeypress = function () {
      profileDiv.innerHTML = "";
      postsDiv.innerHTML = "";
      startBtn.disabled = false;
    }

    function buildProfile(profile) {
      console.log(profile);
      profileDiv.insertAdjacentHTML('beforeend', `<div class="module">
                <h2>${profile.name}</h2>
                <p>Website: <a href="${profile.website}">${profile.website}</a></p>
              </div>
            `);
    }

    function buildPosts(posts) {
      console.log(posts);
      posts.forEach(post => {
        postsDiv.insertAdjacentHTML('beforeend', `<div class="module">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <button class="loadComments" data-post-id="${post.id}" value="Load Comments">Load Comments</button>
                <div class="comments" id="comment_${post.id}"></div>
              </div>
            `)
      });
      document.querySelectorAll(".loadComments").forEach(btn => {
        btn.onclick = loadComments;
      })
    }

    function loadComments(btn) {
      this.disabled = true;
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.dataset.postId}`)
          .then(res => res.json())
          .then(buildComments)
          .catch(console.error);
    }

    function buildComments(comments) {
      if (comments.length == 0) {
        return;
      }
      console.log(comments);
      let commentDiv = document.getElementById(`comment_${comments[0].postId}`);
      comments.forEach(comment => {
        commentDiv.insertAdjacentHTML('beforeend', `<div class="comment">
                <h4>${comment.name} - ${comment.email}</h4>
                <p>${comment.body}</p>
              </div>
            `)
      });
    }
  }
})();
