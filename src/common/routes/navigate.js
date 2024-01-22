export const ROUTES = {
  static: {
    home: '*',
    user: '/users/:userId/*',
    userPosts: '/users/:userId/posts',
    userAlbums: '/users/:userId/albums',
  },
  dynamic: {
    userDetails: id => `/users/${id}`,
    userPosts: userId => `/users/${userId ? userId : ':userId'}/posts`,
    userAlbums: userId => `/users/${userId ? userId : ':userId'}/albums`,
  },
};
