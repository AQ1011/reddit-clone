import Image from 'next/image'
import styles from './post.module.scss'

export default function Post({ post }) {
    const urlPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    return (
        <div className={styles.post}>
            <div className={styles.info}>
                <span className={`${styles.underline} ${styles.link}`}>r/{post.subreddit} </span> 
                · 
                <span className={`${styles.underline} ${styles.author}`}> u/{post.author}</span>
            </div>
            <div className={styles.title}>{post.title}</div>
            { 
                urlPattern.test(post.thumbnail) 
                && <Image src={post.thumbnail} alt={post.title} width={70} height={70}/> 
            }
        </div>
    )
}