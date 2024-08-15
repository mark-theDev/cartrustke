import React from 'react'
import { InputProps } from '@/types/input'


export const FormInput = (props: InputProps) => {
  return (
    <input      
      onChange={props.onChange}
      className={props.className}
      type={props.type}
      placeholder={props.placeholder} 
      value={props.value}
    />
  )
}
