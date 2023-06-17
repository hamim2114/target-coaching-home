import './Loader.scss';

const Loader = ({animateExit}) => {
  return (
    <div className="loader">
      <div className={`loader-container ${animateExit ? 'active' : ''}`}>
        <h2>WELCOME TO <br /> TARGET COACHING</h2>
        <div className="loader-img">
        <img src="/loader.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Loader