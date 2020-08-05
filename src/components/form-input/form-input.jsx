import React from 'react';

import './form-input.scss';


// ... otherProps = the input props from login.jsx
// the handleChange will bubble up any changes
// the label prop is used to selectively render label styling if we want it (i.e. typing in the input box)
// wrapping in a group allows the label and input value to always stay together

// note that we have renamed the onChange to handleChange, so when we call this element we must rename the prop
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {
      label ? 
      (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
        {label}
      </label>)
      : null
    }
  </div>
)

export default FormInput;