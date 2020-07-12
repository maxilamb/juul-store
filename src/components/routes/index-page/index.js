import React from 'react';
import Juul from '../../sections/juul';
import Device from '../../sections/device';
import Taste from '../../sections/taste';
import Warranty from '../../sections/warranty';
import Map from '../../sections/map';
import Feedback from '../../sections/feedback';

function IndexPage() {
  return (
    <>
      <Juul />
      <Device />
      <Taste />
      <Warranty />
      <Feedback />
      <Map />
    </>
  );
}

export default IndexPage;
