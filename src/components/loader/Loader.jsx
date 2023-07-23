import './Loader.scss';

const Loader = ({animateExit}) => {
  return (
    <div className="loader">
      <div className={`loader-container ${animateExit ? 'active' : ''}`}>
         <h2>TCH</h2>
      </div>
    </div>
  )
}

export default Loader