import { DrawingContext } from '../Contexts/DrawingContext';
import reset from '../assets/reset.svg';
import './GlobalButtons.scss';
import { useContext } from 'react';

function Reset() {

    const { resetCanvas } = useContext(DrawingContext);

    return (
        <button
            className='btn-decoration'
            onClick={resetCanvas}
        >
            <img src={reset} alt="Reset button"></img>
        </button>
    );
}

export default Reset;