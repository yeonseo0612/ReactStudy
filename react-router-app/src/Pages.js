import { useParams, Link, Route , Routes, Outlet} from "react-router-dom";
import { Navigate } from 'react-router-dom';



const Home = () => {

      //위 배열에 있는 내용을
      const users = [
        {id:1, name:"홍길동"},
        {id:2, name:"김자바"},
        {id:3, name:"이디비"}
    ];
      return(
        <div>
            <h2>홈 페이지</h2>
            <ul>
              {users.map(user => (
                <li style={{listStyle : "none"}} key={user.id}><Link to = {`/users/${user.id}`}>{user.name}님의 프로필 보기</Link></li>
              ))}
            </ul>
            <p>환영합니다</p>
        </div>
      )
    }

  const About = () => {

    return(
      <div>
        <h2>소개 페이지</h2>
        <p>React Router 실습 예제입니다.</p>
      </div>
    )
  }
  const PostDetail = () => {
    const {postId} = useParams();

    return(
      <div>
          <h2>게시글 상세 페이지</h2>
          <p>게시글 ID : {postId}</p>
      </div>
    )
  }

  const UserProFile = () => {
    const {id} = useParams();

    //실제로는 id를 사용하여 서버에서 데이터를 가져오지만
    //연결이 안되어있으니 목업데이터를 사용해보자.
    const user = {
        id,
        name : id === '1' ? '홍길동' : id === '2' ? '박길동' : '김개똥',
        age: id==='1' ? 30 : id ==='2' ? 45 : 38
    }
    return(
      <div>
        <h2>{user.name}님의 프로필</h2>
        <p>사용자 ID: {user.id}</p>
        <p>나이 : {user.age}</p>
      </div>
    )

  }

  //중첩라이우팅 컴포넌트
  const Dashboard = () => {
    return(
      <div>
      <h1>대시보드</h1>
      <nav>
        <ul>
        <li><Link to="/dashboard/overview">개요</Link></li>
        <li><Link to="/dashboard/settings">설정</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="overview" element={<Overview />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
    )
  }

  const Overview = () => {
    return <h2>대시보드 개요 페이지</h2>
  }

  const Settings = () => {
    return <h2>대시보드 설정 페이지</h2>
  }

  const NotFound = () => {
    // 즉시 다른경로로 이동시킬 수 있다.
    return <Navigate to="/" />

  }

  const Login = () => {
    return <h2>로그인 페이지</h2>
  }

  const PrivateRoute = ({element, isAuthenticated}) => {
    return isAuthenticated ? element : <Navigate to="/" />
  }
  export {Home, About, PostDetail, UserProFile, Dashboard, Overview, Settings, NotFound, Login, PrivateRoute};
