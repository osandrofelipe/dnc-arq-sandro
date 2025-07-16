import "./LoadingSpinner.css";
import LoadingSpinnerGif from '../../assets/loading-spinner.gif'

function LoadingSpinner() {
  return (
    <div className="d-flex loading-overlay-container al-center jc-center">
        <img src={LoadingSpinnerGif} alt="Loading" height="80px"/>
    </div>
  );
}

export default LoadingSpinner;
