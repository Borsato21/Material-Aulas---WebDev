import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
 
export default function PostsUsuario(){
    const [posts, setPosts] = useState([]);
 
    const parametros = useParams();
 
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userID=${parametros.id}`)
          .then((res) => res.json())
          .then((data) => setPosts(data));
      }, []);
 
    return(
        <div>
            {posts.map((post) =>(
                <Link
                key={post.id}
                >
                    <div className="bg-purple-600 mb-4 p-2.5 text-white">
                        <h1>Esse é o titulo: {post.title}</h1>
                        <h2>Esse é o post: {post.body}</h2>
                    </div>
                   
                </Link>
            ))}
        </div>
    )
}
 