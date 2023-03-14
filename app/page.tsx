'use client'

import { useEffect, useState } from "react";
import Post from "../components/post/post";
import styles from "../styles/Home.module.scss"

// async function getData() {
//     const res = await fetch('https://www.reddit.com/.json', { next: { revalidate: 300 } });
//     console.log(res.ok)
//     return await res.json();
//   }

export default function Page() {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState({data: null, index: null});
    useEffect(() => {
        fetch('https://www.reddit.com/hot.json')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.data.children);
                console.table(data.data.children);
            });
    }, [])
    
    const openPost = (post, index, e) => {
        setCurrentPost({data: post.data, index});
        let el = e.target;
    }

    return (
        <div className={styles.posts}>
            <div className={styles.postlist}>
            {posts.map((post, index) => {
                return (
                    <div  key={index}  onClick={(e) => openPost(post, index, e)}>
                        <Post post={post.data}></Post>
                    </div>
                )
            })}
            </div>
        </div>
    )
}