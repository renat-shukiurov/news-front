import axios from "axios";

export default class CategoryService{
    static async getAll(){
        const response = await axios.get("http://localhost:3001/category")
        return response.data

    }
}