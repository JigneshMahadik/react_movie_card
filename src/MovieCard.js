import './App.css';
import rightPic from "./images/inception-2.jpg"
import leftPic from "./images/inception-1.jpg"
import share from "./images/share.svg"
import heart from "./images/heart-2.svg"
import comment from "./images/comment.png"

export function MovieCard({prop}) {
    return(
        <div>
            <div className="movie-card">
                <div id="left-cont">
                    <div id="row-1">
                        <img src={prop.pic_vertical} id="left-row-1"/>
                        <div id="movie-name-div">
                        <span>{prop.name}</span>
                        <br/>
                        <span>{prop.release_year}, </span>
                        <span>{prop.director}</span>
                        <br/><br/>
                        <span id="min">{prop.duration_minutes}min </span>
                        <span>{prop.type}</span>
                        </div>
                    </div>
                    <div id="row-2">
                        <p>{prop.detail}</p>            
                    </div>
                    <div id="icons">
                        <img src={share}/>
                        <img src={heart}/>
                        <img src={comment}/>
                    </div>
                </div>
                <div id="right-cont">
                    <img src={prop.pic_square} id="right-pic"/>
                </div>
            </div>
        </div>
    )
}