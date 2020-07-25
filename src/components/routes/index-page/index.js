import React from 'react';
import Device from '../../sections/device';
import Warranty from '../../sections/warranty';
import Feedback from '../../sections/feedback';
import Charge from '../../sections/charge';
import Advantages from '../../sections/advantages';
import Introduction from '../../sections/introduction';

function IndexPage() {
  return (
    <>
      <Introduction />
      <Device />
      <Charge />
      <Advantages />
      <Warranty />
      <Feedback />
    </>
  );
}

export default IndexPage;
