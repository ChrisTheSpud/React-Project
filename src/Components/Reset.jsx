import reset from '../assets/reset.svg';
import './GlobalButtons.scss';

function Reset({resetHandler}) {
    return (
        <button
            className='btn-decoration'
            onClick={resetHandler}
        >
            <img src={reset} alt="Reset button"></img>
        </button>
    );
}

export default Reset;