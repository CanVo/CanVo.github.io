
import './Button.css'

// Array of .css classes
const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

// have Button have specific properties and perform function
export const Button = ({children, 
  type, 
  onClick, 
  buttonStyle, 
  buttonSize}) => {

    // If the button doesn't have a style, set it to default style in STYLES array. If it does, use that style.
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    // Same logic above. If it doesn't have a SIZE, default it to first entry in SIZES array. Else use the size given.
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  };

