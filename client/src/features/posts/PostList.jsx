import React, {useState, useEffect } from 'react';
import { API_URL } from '../../constants';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);
    
    useEffect(() => {
        console.log("Loading posts..." + API_URL);
        async function loadPosts() {
            try {
                const response = await fetch(`${API_URL}/posts`);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        loadPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className="post-container">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList;