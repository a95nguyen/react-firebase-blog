import './App.css';
import Posts from './components/Posts.js'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

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
      title: 'Dis-ease',
      description: 'Pandemic life and productivity...'
    }
  ])

  return (
    <div>
      <Header />
      <h3>YEAAA~~ LFE GOES ONNNn..</h3>
      <div className='container'>
        <Posts posts={posts} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
