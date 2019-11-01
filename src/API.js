export default (function API() {
  const API_ADDR = 'https://jsonplaceholder.typicode.com';

  let UsersCache = [];

  return {
    async getPosts() {
      let postsUrl = API_ADDR + '/posts';
      let usersUrl = API_ADDR + '/users';

      let posts = await fetch(postsUrl);

      let users = await fetch(usersUrl);

      UsersCache = await users.json();

      return await posts.json();
    },

    async getUserById(id) {
      return UsersCache.find(user => user.id === id);
    },

    async getPostById(id) {
      let postUrl = `${API_ADDR}/posts/${id}`;
      // eslint-disable-next-line
debugger;
      let commentsUrl = `${API_ADDR}/comments?postId=${id}`;

      let post = await fetch(postUrl);

      let comments = await fetch(commentsUrl);

      comments = await comments.json();

      post = await post.json();

      let usersUrl = `${API_ADDR}/users/${post.userId}`;

      let user = await fetch(usersUrl);

      user = await user.json();

      return {
        post: post,
        comments: comments,
        user: user
      }

    }

  };
})();
