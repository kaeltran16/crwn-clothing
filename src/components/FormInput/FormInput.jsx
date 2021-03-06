import React from 'react';
import { FormGroup, Input, Label } from './styles';


const FormInput = ({ handleChange, label, value, ...otherProps }) => {
   console.log(value);
   return (
      <FormGroup>
         <Input className='form-input' onChange={handleChange} {...otherProps}/>
         {label ?
            <Label value={value}>
               {label}
            </Label>
            : null}
      </FormGroup>
   );
};

export default FormInput;
