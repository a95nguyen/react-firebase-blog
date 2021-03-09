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
  // hardcoded posts for front-end design purposes
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Black Swan - BTS',
      quote: 'If this can no longer resonate with me / If this can no longer make my heart flutter / Perhaps, this will be how I die my first death',
      gif: 'https://media1.giphy.com/media/gGlPFLqXHFUaQk1Kal/giphy.gif',
      description: "By layering dark and introspective lyrics over a heavy trap beat and light guitar strokes, \
      BTS delves head first into any creative's worst fear: losing their passion for creating. \
      The emo hip-hop track not only explores their passion for music, \
      but also the possible downsides of it: burnout and losing their creative touch. From BTS' view, \
      when music and dancing can no longer touch their hearts, this is how they'd die their first death. \
      It is noteworthy that inspiration is drawn from a quote from Martha Graham: \
      'A dancer dies twice - once when they stop dancing - and this first death is more painful'."
    },
    {
      id: 2,
      title: 'Dis-ease - BTS',
      quote: "24 hours, that's plenty of time / I could sleep all day but there's still no problem / I think I should work till my body breaks",
      gif: 'https://64.media.tumblr.com/632764c235a36ae194cb1deea1ec0dd8/a79f2a82cb4ef3ab-39/s400x600/b4ccc58c1fcc6ddcf10ba1024b0f31573b22c1e6.gifv',
      description: "Pandemic life and productivity - two words that have molded into synonyms since the start of COVID-19. Most fail to realize that \
      free time is not an indicator that you should pick up a new language - or learn a new skill - or get ahead in your studies. j-hope, member of BTS and one of \
      the main accredited songwriters on Dis-ease shines a light on this issue. Through an old-school\
      hip-hop tune, the lyrics showcase the uncertainty and uneasiness of pandemic life and the constant need to work - something we all are experiencing. Although\
      the track focuses on this personal disease (a play on the actual disease that has given us so much free time), the bridge offers hope to listeners: 'No night lasts forever / I've become stronger'."
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor',
      quote: 'Vel pharetra vel turpis nunc eget lorem dolor sed.',
      gif: 'https://cdn2.scratch.mit.edu/get_image/gallery/28498744_170x100.png',
      description: 'Lacus vel facilisis volutpat est velit egestas dui id. Donec ac odio tempor orci dapibus ultrices in iaculis. Sit amet nulla facilisi morbi tempus iaculis urna. Consectetur adipiscing elit pellentesque habitant morbi. Quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl pretium fusce. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Dictum fusce ut placerat orci nulla pellentesque. Blandit turpis cursus in hac habitasse platea dictumst quisque. Enim neque volutpat ac tincidunt vitae semper quis. Molestie at elementum eu facilisis sed odio morbi quis. Tincidunt id aliquet risus feugiat in ante metus dictum. Pharetra vel turpis nunc eget lorem dolor.'
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor',
      quote: 'Vel pharetra vel turpis nunc eget lorem dolor sed.',
      gif: 'https://cdn2.scratch.mit.edu/get_image/gallery/28498744_170x100.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl vel pretium lectus quam id leo. Id diam vel quam elementum. Diam donec adipiscing tristique risus nec feugiat. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Sem et tortor consequat id porta nibh venenatis. Auctor urna nunc id cursus metus aliquam eleifend. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Nunc id cursus metus aliquam eleifend. Bibendum est ultricies integer quis auctor elit sed. In hendrerit gravida rutrum quisque non tellus orci. Proin sed libero enim sed. Blandit aliquam etiam erat velit scelerisque in. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Pellentesque massa placerat duis ultricies lacus sed. Lobortis elementum nibh tellus molestie. Ullamcorper eget nulla facilisi etiam dignissim. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Mi bibendum neque egestas congue quisque egestas.'
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor',
      quote: 'Vel pharetra vel turpis nunc eget lorem dolor sed.',
      gif: 'https://cdn2.scratch.mit.edu/get_image/gallery/28498744_170x100.png',
      description: 'Lacus vel facilisis volutpat est velit egestas dui id. Donec ac odio tempor orci dapibus ultrices in iaculis. Sit amet nulla facilisi morbi tempus iaculis urna. Consectetur adipiscing elit pellentesque habitant morbi. Quis vel eros donec ac odio tempor. Massa tempor nec feugiat nisl pretium fusce. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Dictum fusce ut placerat orci nulla pellentesque. Blandit turpis cursus in hac habitasse platea dictumst quisque. Enim neque volutpat ac tincidunt vitae semper quis. Molestie at elementum eu facilisis sed odio morbi quis. Tincidunt id aliquet risus feugiat in ante metus dictum. Pharetra vel turpis nunc eget lorem dolor. '
    }
  ])

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
                <Posts posts={posts} setSelectedPost={setSelectedPost} />
              </div>
              <br></br>
              <br></br>
              <br></br>
              {(!(JSON.stringify(selectedPost) == JSON.stringify({}))) && <Modal selectedPost={selectedPost} setSelectedPost={setSelectedPost} />}
              {((JSON.stringify(selectedPost) == JSON.stringify({}))) && <ScrollToTopBtn />}
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
