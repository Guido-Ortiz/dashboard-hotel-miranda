import React from 'react';
import { CircularProgress } from '@mui/material';
import { CircularLoader, LoaderWrapper } from './LoaderStyle';

const Loader = () => {
    return (
        <LoaderWrapper>
          <CircularProgress sx={CircularLoader} />
        </LoaderWrapper>
      )
}

export default Loader