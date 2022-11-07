import api from "../../services/api"
import { Posts } from "../../components/Posts/"
import { useState } from "react"

export function Main(){

    const [post, setPost] = useState([])

    async function handleAxios(){
        try{
            const response = await api.get("/posts")
            setPost(response.data)
        }catch (e){
            console.log(e)
        }
    }

    return(
        <div className="container">
            <h1>Main</h1>
            <button onClick={handleAxios}>Fazer requisição</button>
            <div className="mt-5 container-posts">
                {
                    post.map(post =>{
                        return (
                            <>
                                <Posts key={post.id} subtitle={post.category} title={post.title}>
                                    {post.resume}
                                </Posts>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}