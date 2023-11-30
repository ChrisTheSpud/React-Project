import redo from '../assets/redo.svg';
import './GlobalButtons.scss';

function Redo({redoHandler}) {
    return (
        <button
            className='btn-decoration'
            onClick={redoHandler}
        >
            <img src={redo} alt="Redo button"></img>
        </button>
    );
}

export default Redo;