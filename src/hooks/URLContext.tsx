import { FormHandles } from '@unform/core';
import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import * as Yup from 'yup';
import api from '../services/api';
import getValidationErros from '../utils/getValidationErrors';



interface BothURL {
  url: string;
  shortenedUrl: string;
}

interface URLContextData {
}

export const URLContext = createContext<URLContextData>({} as URLContextData);

export const URLContextProvider: React.FC =  ({ children }) => {





  return(
    <URLContext.Provider value={{
    }}>
      {children}
    </URLContext.Provider>
  )
}

export function useURL(): URLContextData {
  const context = useContext(URLContext);

  return context;
}


