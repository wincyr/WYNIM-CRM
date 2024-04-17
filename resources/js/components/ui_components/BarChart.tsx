import { BarChart } from '@tremor/react';

const chartdata = [
  {
    name: 'University of Toronto',
    'Applicants': 120,
  },
  {
    name: 'University of British Columbia',
    'Applicants': 94,
  },
  {
    name: 'University of Calgary',
    'Applicants': 150,
  },
  {
    name: 'University of Waterloo',
    'Applicants': 85,
  },
  {
    name: 'University of Alberta',
    'Applicants': 71,
  },
  {
    name: 'Universite de Montreal',
    'Applicants': 170,
  },
  {
    name: 'University of Lethbridge',
    'Applicants': 98,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat('us').format(number).toString();

export function BarChartData() {
  return (
    <>
      <h3 className="text-lg font-medium text-black">
        Popular Choices of Schools in Canada
      </h3>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={['Applicants']}
        colors={['primary']}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </>
  );
}