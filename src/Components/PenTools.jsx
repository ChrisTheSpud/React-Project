import pentool from '../assets/pentool.svg';
import eraser from '../assets/eraser.svg';
import './GlobalButtons.scss';

function PenTools({rangeHandler, eraserHandler, penHandler}) {
    return (
        <>
            <label className="label-group">
                <input 
                    type="radio" 
                    name="drawingtool" 
                    className="drawing-input"
                    id="pen"
                    defaultChecked
                >
                </input>
                <img 
                    className="draw-image" 
                    src={pentool}
                    alt="Pen tool"
                >
                </img>
            </label>
            <label className="label-group">
                <input 
                    type="radio" 
                    name="drawingtool" 
                    className="drawing-input"
                    id="eraser"
                    onClick={eraserHandler}
                >
                </input>
                <img 
                    className="draw-image" 
                    src={eraser}
                    alt="Eraser Tool"
                >
                </img>
            </label>
            <label className="label-group">
                <input 
                    className="range-select"
                    id="lineWidth"
                    type="range"
                    min="1"
                    max="25"
                    defaultValue={1}
                    onChange={rangeHandler}
                >
                </input>
            </label>
        </>
    );
}

export default PenTools;