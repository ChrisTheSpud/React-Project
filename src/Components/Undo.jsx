import { DrawingContext } from '../Contexts/DrawingContext';
import undo1 from '../assets/undo.svg';
import './GlobalButtons.scss';
import { useContext } from 'react';

function Undo() {

    const { undo } = useContext(DrawingContext);

    return (
        <button
        className='btn-decoration'
        onClick={undo}>
            <img src={undo1} alt="Undo button"></img>
        </button>
    );
}

export default Undo;