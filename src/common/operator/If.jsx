import React from 'react';

// import { Container } from './styles';

export default function operator(props) {
  if(props.test)
    return props.children
  else
    return false  
}
