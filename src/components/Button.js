import PropTypes from 'prop-types'


function Button({name, color, toggleForm}) {
  return (
    <button onClick={toggleForm} style={{backgroundColor:color}} className="btn">{name}</button>
  )
}

export default Button

Button.defaultProps = {
    color:'green',
    name:'click'
}
 
Button.propTypes = {
    color:PropTypes.string.isRequired,
    
  
 }