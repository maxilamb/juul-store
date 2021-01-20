import React, { useContext } from 'react';
import Context from '../../context';
import StepFirst from './step-first';
import StepSecond from './step-second';
import StepThree from './step-three';
import StepSuccess from './step-success';

export default function OrderForm() {
  const {
    store: { formStage },
  } = useContext(Context);
  return (
    <div>
      {formStage === 1 && <StepFirst />}
      {formStage === 2 && <StepSecond />}
      {formStage === 3 && <StepThree />}
      {formStage === 4 && <StepSuccess />}
    </div>
  );
}
