//fetch를 사용하여, 외부 api에서 데이터를 가져와 화면에 렌더링하는 프로그램 만들기

//외부 api를 호출하여 데이터를 가져온다. (https://jsonplaceholder)
//데이터를 가져오는 동안 로딩 상태를 표시한다.
//api 요청 실패 시, 에러 메시지를 표시해야한다.
//가져온 데이터를 화면에 목록 형태로 출력한다.
//사용자의 이름과 이메일 주소 출력

import {useState, useEffect} from 'react'


export const FectchUser = () => {
    const [loading, setLoading] = useState(true); //로딩 상태 관리
    const [error, setError] = useState(null); //에러 상태 관리
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if(!response){
                    throw new Error('데이터를 불러오는데 실패했습니다.')
            }
            const data = await response.json();
        
            setPosts(data);
        
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if(loading){
        return <p>롣링 중....</p>
    }

    //에러 발생 시 보여줄 내용
    if(error){
        return <p>에러발생 : {error}</p>
    }
    return(
        <div>
            <h2>user 목록</h2>
            <hr/>
            <ul>
                {posts.map((post) => (
                    <li style={{listStyle : "desc", fontWeight : "bold" , margin:"0", padding:"0"}} key={post.id}>이름 : {post.name} <br /> 이메일 : {post.email}<hr /></li>
                ))}
            </ul>
        </div>
    )
}
