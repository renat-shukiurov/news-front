import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title}) => {

    if (!posts.length){
        return (
            <h1 style={{textAlign: "center"}}>
                Posts not found
            </h1>
        )
    }

    return (

        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {
                    posts.map((post, index) =>
                        <CSSTransition
                            key={index}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem post={post} />
                        </CSSTransition>
                    )
                }
            </TransitionGroup>


        </div>
    );
};

export default PostList;