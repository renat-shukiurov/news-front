import axios from "axios";

export default class PostService{
    static async getAll(limit=10, page = 1, categoryId = -1){
        const response = await axios.get("http://localhost:3001/news", {
            params: {
                categoryId,
                limit: limit,
                page: page,
            }
        })
        return response.data

    }

    static async getById(id){
        const response = await axios.get("http://localhost:3001/news/" + id)
        return response.data

    }
}