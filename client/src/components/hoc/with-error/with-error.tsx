import { SerializedError } from '@reduxjs/toolkit';
import React, { FC } from 'react';
import {
  StyledErrorMessage,
  StyledErrorMessageClient,
} from './with-error.styles';

interface IProps {
  error?: SerializedError;
  clientMessage: string;
}

const WithError: FC<IProps> = ({ error, clientMessage, children }) => {
  if (error) {
    return (
      <>
        <StyledErrorMessageClient>{clientMessage}</StyledErrorMessageClient>
        <StyledErrorMessage>{error.message}</StyledErrorMessage>
      </>
    );
  }
  return <>{children}</>;
};

export default WithError;
