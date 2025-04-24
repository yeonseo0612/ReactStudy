import logo from './logo.svg';
import './App.css';
import {Fetch, Axois} from './Async'
import {Sync, Async} from './Sycn'
import { FectchExam } from './FetchExam';
import { FectchUser } from './UserList';
import { BlogApp } from './Blog';
function App() {
  return (
    <div className="App">
      {/* <Sync /> */}
      {/* <Async /> */}
      {/* <Axois /> */}
      {/* <FectchExam /> */}
      {/* <FectchUser /> */}
      <BlogApp />
      </div>
  );
}

export default App;
