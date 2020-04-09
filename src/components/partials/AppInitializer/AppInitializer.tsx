import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeApp } from 'store/init/actions';

const AppInitializer: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  return null;
};

export default AppInitializer;
