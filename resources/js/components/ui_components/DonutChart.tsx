import { DonutChart, Legend } from '@tremor/react';

const courses = [
  {
    name: 'Pharmacist',
    applicants: 120,
  },
  {
    name: 'Industrial Engineering',
    applicants: 76,
  },
  {
    name: 'Financial Management',
    applicants: 57,
  },
  {
    name: 'Computer Science',
    applicants: 45,
  },
  {
    name: 'Information Technology',
    applicants: 110,
  },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

export function DonutChartCourses() {
  return (
    <>
      <div className="flex items-center justify-center space-x-6">
        <DonutChart
          data={courses}
          category="applicants"
          index="name"
          valueFormatter={valueFormatter}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="w-40"
        />
        <Legend
          categories={['Pharmacist', 'Industrial Engineering', 'Financial Manangement', 'Computer Science', 'Information Technology']}
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="max-w-xs"
        />
      </div>
    </>
  );
}