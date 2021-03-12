import Posts from './components/Posts.js'
import { useState, useLayoutEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Modal from './components/Modal'
import ScrollToTopBtn from "./components/ScrollTop";
import Scroll from './components/Scroll.js'

function App() {
  // selectedPost when button is clicked
  const [selectedPost, setSelectedPost] = useState({});

  return (
    <Router>
      <Scroll>
        <div>
          <Route path='/' exact render={(props) => (
            <>
              <Header />
              <br></br>
              <div className='container'>
                <Posts setSelectedPost={setSelectedPost} />
              </div>
              <br></br>
              <br></br>
              <br></br>
              {(!(JSON.stringify(selectedPost) == JSON.stringify({}))) 
                  && <Modal selectedPost={selectedPost} setSelectedPost={setSelectedPost} />}
              {((JSON.stringify(selectedPost) == JSON.stringify({}))) 
                  && <ScrollToTopBtn />}
            </>
          )} />
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </Scroll>
    </Router>
  );
}

export default App;
