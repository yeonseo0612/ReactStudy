//상단 가로 메뉴를 만들 것이다.
//Link를 통해 경로(path)전환
//useContext(ThemeContext)로 테마 읽어오기

import {useContext} from "react"
import {Link} from "react-router-dom"
import {ThemeContext} from "../context"

export default NavBar = () => {
    const {theme} = useContext(ThemeContext);
    return(
        <nav className={`navbar ${theme}`}>
            <Link to = "/">Home</Link>
            <Link to = "/posts">Posts</Link>
            <Link to = "/settings">Settings</Link>
        </nav>
    )
}