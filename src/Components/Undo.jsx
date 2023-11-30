import undo from '../assets/undo.svg';
import './GlobalButtons.scss';

function Undo({undoHandler}) {
    return (
        <button
        className='btn-decoration'
        onClick={undoHandler}>
            <img src={undo} alt="Undo button"></img>
        </button>
    );
}

export default Undo;