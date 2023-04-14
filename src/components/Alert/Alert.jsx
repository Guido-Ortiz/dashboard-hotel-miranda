import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const AlertComponent = ({ open, setOpen, text }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
      <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>{text}</Alert>
    </Snackbar>
  )
}

export default AlertComponent