// import logo from './logo.svg';
import './App.css';
import { MovieCard } from './MovieCard';
import movieData from './data.json'

function App() {
  return (
    <div>
      {
        movieData.movies.map((item,id)=>{
          return(
            <MovieCard key={id} prop={item} />
          )
        })
      }
    </div>
  );
}

export default App;
