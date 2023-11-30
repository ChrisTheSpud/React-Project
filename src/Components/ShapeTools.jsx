import square from '../assets/squareshape.svg';
import ellipse from '../assets/ellipseshape.svg';
import triangle from '../assets/triangleshape.svg';
import './GlobalButtons.scss';

function ShapeTools() {
    return (
        <>
            <label className="label-group">
                <input 
                    type="radio" 
                    name="drawingtool" 
                    className="drawing-input"
                    id="square"
                >
                </input>
                <img className="draw-image" src={square}></img>
            </label>
            <label className="label-group">
                <input 
                    type="radio" 
                    name="drawingtool" 
                    className="drawing-input"
                    id="ellipse"
                    >
                </input>
                <img className="draw-image" src={ellipse}></img>
            </label>
            <label className="label-group">
                <input 
                    type="radio" 
                    name="drawingtool" 
                    className="drawing-input"
                    id="triangle"
                    >
                </input>
                <img className="draw-image" src={triangle}></img>
            </label>
        </>
    );
}

export default ShapeTools;