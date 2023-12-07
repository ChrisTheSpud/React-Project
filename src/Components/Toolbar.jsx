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
import fillcheck from '../assets/fillcheck.svg'

function Toolbar() {

    const { undo, redo, resetCanvas, strokeSize , eraser, colorPicker, fillCanvas, downloadFunction } = useDrawingContext();

    return (
        <>
        <div className='toolbar'>
            <button
            className='btn-decoration'
            onClick={undo}
            >
                <img 
                    src={undosvg} 
                    alt='Undo button'
                />
            </button>
            <button
            className='btn-decoration'
            onClick={redo}
            >
            <img 
                src={redosvg} 
                alt='Redo button'
            />
            </button>
            <button
                className='btn-decoration'
                onClick={resetCanvas}
            >
                <img 
                    src={resetsvg} 
                    alt='Reset button'
                />
            </button>
            <label className='label-group'>
                <input 
                    type='radio' 
                    name='drawingtool' 
                    className='drawing-input'
                    id='pen'
                    defaultChecked
                />
                <img 
                    className='draw-image' 
                    src={pentoolsvg}
                    alt='Pen tool'
                />
            </label>
            <label className='label-group'>
                <input 
                    type='radio' 
                    name='drawingtool' 
                    className='drawing-input'
                    id='eraser'
                    onClick={eraser}
                />
                <img 
                    className='draw-image' 
                    src={erasersvg}
                    alt='Eraser Tool'
                    id='eraser-tool'
                />
            </label>
            <label className='label-group'>
                <input 
                    className='range-select'
                    id='lineWidth'
                    type='range'
                    min='1'
                    max='15'
                    defaultValue={1}
                    onChange={strokeSize}
                />
            </label>
            <label className='label-group'>
                <input 
                    type='radio' 
                    name='drawingtool' 
                    className='drawing-input'
                    id='square'
                />
                <img 
                    className='draw-image' 
                    src={square}
                    alt = 'Square Tool'
                />
            </label>
            <label className='label-group'>
                <input 
                    type='radio' 
                    name='drawingtool' 
                    className='drawing-input'
                    id='ellipse'
                    />
                <img 
                    className='draw-image' 
                    src={ellipse}
                    alt='Ellipse Tool'
                />
            </label>
            <label className='label-group'>
                <input 
                    type='radio' 
                    name='drawingtool' 
                    className='drawing-input'
                    id='triangle'
                    />
                <img 
                    className='draw-image' 
                    src={triangle}
                    alt='Triangle Tool'
                />
            </label>
            <label className='label-group'>
                <input
                    type='color'
                    className='color-input'
                    onInput={colorPicker}
                    id='color-picker'
                />
            </label> 
            <button 
                className='btn-decoration'
                onClick={fillCanvas}
                >
                    <img 
                        src={filltool} 
                        alt='Fill Tool'
                    />
            </button>
            <label className='label-group'>
                <input 
                    className='checkbox-input'
                    type='checkbox'
                    id='solid-fill'
                />
                <img 
                    className='draw-image'
                    src={fillcheck}
                    alt='Fill tool'
                />
            </label>
        </div>
     </>
    );
}

export default Toolbar;