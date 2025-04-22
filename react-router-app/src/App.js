import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { About, PostDetail, UserProFile, Dashboard, Overview, Settings,Login,PrivateRoute} from './Pages';
import { Navbar } from './Navbar';
import { Routing } from './Routing';
import { NotFound } from './Pages';
import {Home} from './Homes';
import {Categories, Products, ProductDetail} from './Categorie';

//Routes : switch같은 개념으로 가장 구체적인 경로를 우선 매칭한다.
//Route : URL과 컴포넌트를 매핑하여 특정 경로에 맞는 컴포넌트를 렌더링한다.//

//Route 컴포넌트의 주요 속성
//1. path
//URL 경로를 정의한다.
//사용자가 특정 경로에 접근할 때 어떤 컴포넌트를 렌더링할지 결정한다.

//2.element
//path에 들어있는 경로와 일치할 때 렌더링할 컴포넌트를 지정한다.

function App() {
  const isAuthenticated = true; 

    {/* <Routing /> */}
  return(
  
    // <Routes>
    //   {/* <Route path="/" element={<Home />}></Route>
    //   <Route path="*" element={<NotFound />}></Route> */}

    //   <Route path="/login" element={<Login />} />
    //   <Route path="/home" element={<PrivateRoute element ={<PrivateRoute  element={<Home />} isAuthenticated={isAuthenticated}/>} />} />
    // </Routes>
    // <Routes>
    //   <Route path="/:lang/home" element={<Home />} />
    // </Routes>
    <Routes>
      <Route path="/" element={<h1>메인 페이지</h1>} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoriId" element={<Products />} />
      <Route path="/categories/:categoriId/products/:prodId" element={<ProductDetail />} />
    </Routes>

     
     
  ) 
}

export default App;
