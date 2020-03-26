import React from 'react';
import ReduxToast from 'react-redux-toastr'
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.min.css'

// import { Container } from './styles';

export default function msg(props) {
  return (
      <ReduxToast timeOut={4000} newestOnTop={false} preventDuplicates={false} 
                  position="top-right" transitionIn="fadeIn" transitionOut="fadeOut"
                  progressBar>

      </ReduxToast>
  )
}
