import './App.css';
import Comments from './components/Comments';
import Likes from './components/Likes';
import Title from './components/Title';


function App() {
  return (
    <div className="content">
      <div className="left">
        <div className="wrap">
          <div className="img-content">
            <img className='main-img' src="https://imgs.developpaper.com/imgs/3451376312-9cddef7772bd9c19_articlex.png" alt="image" />
          </div>
        </div>
        <div className="likes-block">
          <Title/>
          <Likes/>
        </div>
      </div>
      <div className="right">
        <Comments/>
      </div>
    </div>
  );
}

export default App;