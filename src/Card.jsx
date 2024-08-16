import dp from './assets/dpp.webp'
  
  
  function Card() {
    return(
        <div className="card">
            <img className="card-image"src={dp} alt="profilepic"></img>
            <h1 className="card-title">Janani Gopalraju</h1>
            <h2 className="card-subtitle">UI/UX Designer & Full Stack Developer</h2>
            <p className="card-details">Passionate UI/UX designer and full stack developer dedicated to creating seamless and intuitive digital experiences.</p>
        </div>
    );
  }

  export default Card