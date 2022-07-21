import React, {useEffect, useRef, useState} from 'react'
import '../styles/App.css'
import Pagination from "../components/UI/pagination/Pagination";
import PostList from "../components/PostList";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import MySelect from "../components/UI/select/MySelect";
import CategoryService from "../API/CategoryService";


function Posts() {

    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(-1);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    // eslint-disable-next-line
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page, currentCategory) => {
        const response = await PostService.getAll(limit, page, currentCategory)
        setPosts([...response.items]);
        setTotalPages(response.meta.totalPages);
    })

    // eslint-disable-next-line
    const [fetchCategories, isCategoriesLoading, categoryError] = useFetching(async () => {
        const response = await CategoryService.getAll()
        const cats = response.map(item => {return {value: item.id, name: item.title}})
        setCategories([{value: -1, name: "All"}, ...cats]);
    })

    useEffect(() => {
        fetchPosts(limit, page, currentCategory)
    // eslint-disable-next-line
    },  [page, limit, currentCategory])

    useEffect(() => {
        fetchCategories();
    // eslint-disable-next-line
    }, [])

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className="App content">

            {postError &&
                <h1>Something went wrong {postError}</h1>
            }
            <span>Items on page: </span>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                options={[
                    {value: 5, name:"5"},
                    {value: 10, name:"10"},
                ]}
            />

            <span>Categories</span>
            <MySelect
                value={currentCategory}
                onChange={value => setCurrentCategory(value)}
                options={categories}
            />

            {categoryError &&
                <h1>Something went wrong {categoryError}</h1>
            }
            <PostList title={"List of news about JS"} posts={posts}/>
            <div ref={lastElement}/>

            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>

        </div>
    );
}

export default Posts;
