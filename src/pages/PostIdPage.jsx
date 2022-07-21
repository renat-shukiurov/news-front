import {useEffect, useState} from "react";
import Loader from "../components/UI/loader/Loader";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {useParams} from 'react-router-dom'

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response)
    })

    useEffect(() => {
        fetchPostById(params.id);
    // eslint-disable-next-line
    }, [])

    return (
        <div className='post-id content'>
            <h1>{post.title}</h1>
            {isLoading
                ? <Loader/>
                : <>
                    <div className='text-content'>{post.full_description}</div>
                </>
            }

        </div>
    );
};

export default PostIdPage;