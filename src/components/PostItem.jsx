import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom'

const PostItem = ({post}) => {

    const router = useHistory();
    return (
        <div className="post">
            <div className="post__content">
                <img src={post.image} alt=""/>
                <strong>{post.title}</strong>
                <div>
                    {post.short_description}
                </div>
                <p>{new Date(post.date).toLocaleDateString("en-US")}</p>
                <p>Likes: {post.likes}</p>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router.push(`/posts/${post.id}`)}>Open</MyButton>
            </div>
        </div>
    );
};

export default PostItem;