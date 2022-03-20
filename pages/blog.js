import { loadPosts } from "../lib/load-posts";

// This function runs only on the server side

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // Can use any data fetching library
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // By returning { posts: { posts } }, the Blog component will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
