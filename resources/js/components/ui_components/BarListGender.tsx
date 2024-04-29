import { BarList } from '@tremor/react';
import React from 'react'

const datahero = [
  { name: 'Male', value: 456 },
  { name: 'Female', value: 351 },
];

export const BarListGender = () => (
  <>
    <div className='mb-12 mx-auto'>
      <h3 className="text-lg font-bold"> Gender Count </h3>
    </div>
    <BarList data={datahero} className="mx-auto max-w-md" />
  </>
);