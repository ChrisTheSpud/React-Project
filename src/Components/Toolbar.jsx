import { useDrawingContext } from '../Contexts/DrawingContext';
import './Toolbar.scss';
import undosvg from '../assets/undo.svg';
import redosvg from '../assets/redo.svg';
import resetsvg from '../assets/reset.svg';
import pentoolsvg from '../assets/pentool.svg';
import erasersvg from '../assets/eraser.svg';
import square from '../assets/squareshape.svg';
import ellipse from '../assets/ellipseshape.svg';
import triangle from '../assets/triangleshape.svg';
import filltool from '../assets/filltool.svg';

function Toolbar() {

    const { undo, redo, resetCanvas, strokeSize , eraser, colorPicker, fillCanvas } = useDrawingContext();

    return (
        <>
        <div className='toolbar'>
            <button
            className='btn-decoration'
            onClick={undo}
            >
                <img src={undosvg} alt="Undo button"></img>
            </button>
            <button
            className='btn-decoration'
            onClick={redo}
            >
            <img src={redosvg} alt="Redo button"></img>
            </button>
            <button
                className='btn-decoration'
                onClick={resetCanvas}
            >
                <img src={resetsvg} alt="Reset button"></img>
            </button>
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
                    src={pentoolsvg}
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
                    src={erasersvg}
                    alt="Eraser Tool"
                    id="eraser-tool"
                >
                </img>
            </label>
            <label className="label-group">
                <input 
                    className="range-select"
                    id="lineWidth"
                    type="range"
                    min="1"
                    max="15"
                    defaultValue={1}
                    onChange={strokeSize}
                >
                </input>
            </label>
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
            <label className='label-group'>
                <input
                    type='color'
                    className='color-input'
                    onInput={colorPicker}
                    id='color-picker'
                >
                </input>
            </label> 
            <button 
                className='btn-decoration'
                onClick={fillCanvas}
                >
                    <img 
                        src={filltool} 
                        alt="Fill Tool"
                        >
                    </img>
            </button>
        </div>
     </>
    );
}

export default Toolbar;