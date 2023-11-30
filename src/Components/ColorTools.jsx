import filltool from '../assets/filltool.svg';
import './GlobalButtons.scss';

function ColorTools({colorHandler, fillHandler}) {
    return (
        <>
            <label className='label-group'>
                <input
                    type='color'
                    className='color-input'
                    onInput={colorHandler}
                    id='color-picker'
                >
                </input>
            </label> 
            <button 
                className='btn-decoration'
                onClick={fillHandler}
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