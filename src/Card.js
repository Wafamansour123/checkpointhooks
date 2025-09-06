import React, { useState } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faHeart, faComment, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import movies from './Movies';

const HeartIcon = () => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <FontAwesomeIcon
      icon={faHeart}
      onClick={toggleLike}
      style={{ color: liked ? 'red' : 'gray', cursor: 'pointer' }}
    />
  );
};

const Card = () => {
  return (
    <div>
      {/* Premier film : Bright */}
      <div className="movie_card" id="1">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
              alt="Bright"
            />
            <h1>Bright</h1>
            <h4>2017, David Ayer</h4>
            <span className="minutes">117 min</span>
            <p className="type">Action, Crime, Fantasy</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              Set in a world where fantasy creatures live side by side with humans. A
              human cop is forced to work with an Orc to find a weapon everyone is
              prepared to kill for.
            </p>
             <br/>
           <Link to="/trailer/1"><button>trailer</button></Link>


          </div>
          <div className="movie_social">
            <ul>
              <li><FontAwesomeIcon icon={faShare} /></li>
              <li><HeartIcon /></li>
              <li><FontAwesomeIcon icon={faComment} /></li>
              <li>
                <a href="https://www.youtube.com/watch?v=6EZCBSsBxko" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faPlay} style={{ color: 'white' }} /> Voir la bande-annonce
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back bright_back" />
      </div>

      {/* Deuxième film : Titanic */}
      <div className="movie_card" id="2">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src="https://tse4.mm.bing.net/th/id/OIP.H_HwpokhR6rjdfoOfnVIrAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Titanic"
            />
            <h1>Titanic</h1>
            <h4>1997, James Cameron</h4>
            <span className="minutes">195 min</span>
            <p className="type">Drama, Romance</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              A seventeen-year-old aristocrat falls in love with a kind but poor artist
              aboard the luxurious, ill-fated RMS Titanic.
            </p>
             <br/>
             <Link to="/trailer/2">
  <button>trailer</button>
</Link>

          </div>
          <div className="movie_social">
            <ul>
              <li><FontAwesomeIcon icon={faShare} /></li>
              <li><HeartIcon /></li>
              <li><FontAwesomeIcon icon={faComment} /></li>
              <li>
                <a href="https://www.youtube.com/watch?v=2e-eXJ6HgkQ" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faPlay} style={{ color: 'white' }} /> Voir la bande-annonce
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back titanic_back" />
      </div>

      {/* Troisième film : Inception */}
      <div className="movie_card" id="3">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src="https://th.bing.com/th/id/R.83924ca47a66922c4239919f64ff6192?rik=LsCzpI7V8cVyNg&pid=ImgRaw&r=0"
              alt="Inception"
            />
            <h1>Inception</h1>
            <h4>2010, Christopher Nolan</h4>
            <span className="minutes">148 min</span>
            <p className="type">Action, Sci-Fi, Thriller</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              A thief who steals corporate secrets through the use of dream-sharing
              technology is given the inverse task of planting an idea into the mind
              of a CEO.
            </p>
            <br/>
             <Link to="/trailer/3">
  <button>trailer</button>
</Link>
          </div>
    
          <div className="movie_social">
            <ul>
              <li><FontAwesomeIcon icon={faShare} /></li>
              <li><HeartIcon /></li>
              <li><FontAwesomeIcon icon={faComment} /></li>
              <br/>
                
              <li>
                <a href="https://www.youtube.com/watch?v=YoHD9XEInc0" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faPlay} style={{ color: 'white' }} /> Voir la bande-annonce
                </a>  
              </li>
            </ul>
          </div>
          
        
        </div>
        
        <div className="blur_back inception_back" />
      </div>
      
    </div>
  
  );
};

export default Card;
