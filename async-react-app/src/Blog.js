//블로그 프로그램 만들기
//1. 게시물 리스트를 불러오는 기능
//2. 게시물 추가 기능
//3. 게시물 삭제 기능

import { useState, useEffect } from "react"
import axios from 'axios'; 


//제목과 내용을 입력할 수 있는 입력필드 2개와 옆에 추가버튼
//입력필드 밑에는 게시물 리스트를 출력
//각각의 게시물은 삭제버튼이 옆에 있어야함.




export const BlogApp = () => {
    const [posts, setPosts] = useState([]); //데이터를 저장할 상태
    const [loading, setLoading] = useState(true); //로딩 상태 관리
    const [error, setError] = useState(null); //에러 상태 관리
    const [newPost, setNewPost] = useState({title : '', body: ''})

    //게시물 리스트 가져오기
    useEffect(() => {
        const fetchPosts = async () => {
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(response => {
                    setPosts(response.data)
                })
                .catch(err => setError(err.message))
                .finally(() => {
                    setLoading(false);
                })
                

        }
        fetchPosts();
    }, [])

    if(loading) return <p>로딩중...</p>
    if(error) return <p>Error : {error}</p>

    const addPost = async () => {
            axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
                .then((response) => {
                    setPosts([response.data,...posts]);
                    setNewPost({title:'', body:''});
                })

                .catch((err) => {
                    setError(Error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
    }

    //게시글 삭제 
    //필터링해서 다시 렌더링하기
    const deletePost = async () => {
          
 
    }
    return(
       
            <div>
                <div style={{backgroundColor:"black", color:"white", textAlign:"left", height:"100px", display:"flex", alignItems:"center"}}>
                <h2 >Blog</h2>
                </div>
                <div>
                    <span>제목 : </span>
                    <input type="text" placeholder="제목" value={newPost.title} onChange={(e) => setNewPost({...newPost, title:e.target.value})}/>
                    <br />
                    <span>내용 : </span>
                    <textarea placeholder="내용" value={newPost.body} onChange={(e) => setNewPost({...newPost, body:e.target.value})}></textarea>
                    <br/>
                  
                    <hr />
                </div>
                <button onClick={addPost} style={{marginTop:"10px"}}>게시물 추가하기</button>
                <div>
                    <h2>게시물 리스트</h2>
                    {posts.map(post => (
                        <div key={post.id} style={{border:'1px solid black', margin : "10px", padding:"10px"}}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                           <button onClick={() => setPosts(posts.filter(p => p.id !== post.id))}>삭제</button>
                        </div>
                    ))}
                </div>
            </div>
            )
    
}
