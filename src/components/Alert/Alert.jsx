import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const Alert = ({ open, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Booking deleted!</Alert>
      </Snackbar>
  )
}

export default Alert