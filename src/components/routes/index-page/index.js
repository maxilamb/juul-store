import React from 'react';
import Device from '../../sections/device';
import Warranty from '../../sections/warranty';
import Feedback from '../../sections/feedback';
import Charge from '../../sections/charge';
import Advantages from '../../sections/advantages';

function IndexPage() {
  return (
    <>
      <Device />
      <Charge />
      <Advantages />
      <Warranty />
      <Feedback />
    </>
  );
}

export default IndexPage;
