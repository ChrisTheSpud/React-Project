import pentool from '../assets/pentool.svg';
import eraser1 from '../assets/eraser.svg';
import './GlobalButtons.scss';
import { useContext } from 'react';
import { DrawingContext } from '../Contexts/DrawingContext';

function PenTools() {

    const { strokeSize , eraser } = useContext(DrawingContext);

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
                    onClick={eraser}
                >
                </input>
                <img 
                    className="draw-image" 
                    src={eraser1}
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
                    onChange={strokeSize}
                >
                </input>
            </label>
        </>
    );
}

export default PenTools;