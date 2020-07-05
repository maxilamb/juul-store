import React from 'react';
import './style.sass';

export function Loader() {
  return <div className='spinner-grow text-primary' />;
}
export function LoaderFullScreen() {
  return (
    <div className='loader-fullscreen'>
      <Loader />
    </div>
  );
}
