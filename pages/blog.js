import { loadPosts } from '../lib/load-posts';

// This function runs only on the server side 

// posts will be populated at build time by getStaticProps() 
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}
