import { BarList } from '@tremor/react';

const datahero = [
  { name: 'Male', value: 456 },
  { name: 'Female', value: 351 },
];

export const BarListGender = () => (
  <>
    <div className='mb-12 mx-auto'>
        <h3 className="text-lg font-medium"> Gender Count </h3>
    </div>
    <BarList data={datahero} className="mx-auto max-w-md" />
  </>
);