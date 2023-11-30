import { useContext } from 'react';
import filltool from '../assets/filltool.svg';
import './GlobalButtons.scss';
import { DrawingContext } from '../Contexts/DrawingContext';

function ColorTools({colorHandler, fillHandler}) {

const { colorPicker, fillCanvas } = useContext(DrawingContext);

    return (
        <>
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
        </>
    )
}

export default ColorTools;