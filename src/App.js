import './App.css';
import Comments from './components/Comments';
import Likes from './components/Likes';
import Spinner from './components/Spinner';
import Title from './components/Title';
import { useSelector } from 'react-redux';
import { loaderReducer } from './redux/loaderReducer';


function App() {
  
  let error = useSelector(state=>{
    const {loaderReducer:{error}} = state
    return error
  })


  return (
    <div className="content">
      {error && (
        <div className="error_message">
          {error}
        </div>
      )}
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
        <Spinner/>
      </div>
    </div>
  );
}

export default App;
