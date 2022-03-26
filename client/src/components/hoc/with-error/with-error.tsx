import { SerializedError } from '@reduxjs/toolkit';
import React, { FC } from 'react';
import { StyledErrorMessage } from './with-error.styles';

interface IProps {
  error?: SerializedError;
}

const WithError: FC<IProps> = ({ error, children }) => {
  if (error) {
    return <StyledErrorMessage>{error.message}</StyledErrorMessage>;
  }
  return <>{children}</>;
};

export default WithError;
