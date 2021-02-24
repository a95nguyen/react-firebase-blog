import './App.css';
import Posts from './components/Posts.js'
import { useState, useLayoutEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Modal from './components/Modal'
import ScrollToTopBtn from "./components/ScrollTop";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Black Swan',
      description: 'A sad, emo song with trap...'
    },
    {
      id: 2,
      title: 'Life Goes On',
      description: 'A synth-pop track with...'
    },
    {
      id: 3,
      title: 'Dis-ease',
      description: 'Pandemic life and productivity...'
    },
    {
      id: 4,
      title: 'Good Days',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel pretium lectus quam id leo. Id diam vel quam elementum. Diam donec adipiscing tristique risus nec feugiat. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Sem et tortor consequat id porta nibh venenatis. Auctor urna nunc id cursus metus aliquam eleifend. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Nunc id cursus metus aliquam eleifend. Bibendum est ultricies integer quis auctor elit sed. In hendrerit gravida rutrum quisque non tellus orci. Proin sed libero enim sed. Blandit aliquam etiam erat velit scelerisque in. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Pellentesque massa placerat duis ultricies lacus sed. Lobortis elementum nibh tellus molestie. Ullamcorper eget nulla facilisi etiam dignissim. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Mi bibendum neque egestas congue quisque egestas.'
    },
    {
      id: 5,
      title: 'Time Alone With You',
      description: 'Grammy-nominated...'
    }
  ])

  const [selectedPost, setSelectedPost] = useState({});

  return (
    <Router>
      <div>
        <Route path='/' exact render={(props) => (
          <>
            <Header />
            <br></br>
            <div className='container'>
              <Posts posts={posts} setSelectedPost={setSelectedPost} />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {(!(JSON.stringify(selectedPost) == JSON.stringify({}))) && <Modal selectedPost={selectedPost} setSelectedPost={setSelectedPost} />}
          </>
        )} />
        <Route path='/about' component={About} />
        <ScrollToTopBtn />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
