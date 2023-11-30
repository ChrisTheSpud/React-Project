import { DrawingContext } from '../Contexts/DrawingContext';
import redo1 from '../assets/redo.svg';
import './GlobalButtons.scss';
import { useContext } from 'react';

function Redo() {

    const { redo } = useContext(DrawingContext);

    return (
        <button
            className='btn-decoration'
            onClick={redo}
        >
            <img src={redo1} alt="Redo button"></img>
        </button>
    );
}

export default Redo;