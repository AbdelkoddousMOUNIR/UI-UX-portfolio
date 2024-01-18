import './App.css';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Subscribe from './components/Subscribe';
import UsersFeedback from './components/UsersFeedback';
import VideoItem from './components/VideoItem';
import Welcome from './components/Welcome';
import WheyUs from './components/WheyUs';

function App() {
  return (
    <div className="min-h-screen bg-[#181818]">
      <NavBar />
      <Welcome />
      <Courses />
      <AboutUs />
      <WheyUs />
      <VideoItem />
      <UsersFeedback />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
