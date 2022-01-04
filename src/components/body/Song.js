import './bodyStyle/song.css';

function Song({name, poster}) {

    let posterStyle={
        position:"relative",
        width:"100px",
        height:"142px"
      };


    return(
        <div className='wrapper'>
       <img name="song" style={posterStyle} src={poster} alt={name}></img>
       <div className="title" >{name}</div>
        </div>
    );
}

export default Song;