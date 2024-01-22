# Simple blog app

## Description of the task

Building a simple blog app using React.js, SEO optimization and SSR (without NEXT.js)

## Implementation details

On the main page we have a list of users from where we can open posts or user albums

There must be access to the content of posts and albums.

The user should be able to share the link from anywhere in the application (meaning that the roots should be built in such a way that when copying the URL of the page, the content is fixed).

Add a search on the page by one of the fields (username); I would also like to see a sort (asc desc), also by the username field.

## How Application looks like

Page view

Home page and sorting by username
![Home page](./public/homepage.png)

Demonstration of search by username
![Search](./public/serchusername.png)

User, posts and albums pages
![User, posts, albums pages](./public/userpage.png)

## Technologies used in the project

- React.js - v18.2.0
- Express.js
- Webpack
- Babel
- Tailwindcss
- React-router-dom - v6

## Getting Started

First, run the development server:

```bash
npm install

# development
npm run start

# or production
npm run build
npm run start:ssr
```
