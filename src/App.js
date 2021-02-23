import './App.css';
import Posts from './components/Posts.js'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Modal from './components/Modal'

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
      description: '...'
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
              <Posts posts={posts} setSelectedPost={setSelectedPost}/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            { (!(JSON.stringify(selectedPost) == JSON.stringify({}))) && <Modal selectedPost={selectedPost} setSelectedPost={setSelectedPost}/> }
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
