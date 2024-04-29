import { RiFlag2Line } from '@remixicon/react';
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

const data = [
  {
    name: 'Viola Amherd',
    StudentID: 'Federal Councillor',
    Course: 'Pharmacy',
    departement:
      'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
    status: 'pending',
  },
  {
    name: 'Albert Rösti',
    StudentID: 'Federal Councillor',
    Course: 'Industrial Engineering',
    departement:
      'University of Alberta',
    status: 'pending',
  },
  {
    name: 'Beat Jans',
    StudentID: 'Federal Councillor',
    Course: 'Computer Science',
    departement: 'The Federal Department of Justice and Police (FDJP)',
    status: 'pending',
  },
  {
    name: 'Ignazio Cassis',
    StudentID: 'Federal Councillor',
    Course: 'Computer Science',
    departement: 'The Federal Department of Foreign Affairs (FDFA)',
    status: 'pending',
  },
  {
    name: 'Karin Keller-Sutter',
    StudentID: 'Federal Councillor',
    Course: 'Architecture',
    departement: 'The Federal Department of Finance (FDF)',
    status: 'pending',
  },
  {
    name: 'Guy Parmelin',
    StudentID: 'Federal Councillor',
    Course: 'Industrial Engineering',
    departement: 'University of Waterloo',
    status: 'pending',
  },
  {
    name: 'Elisabeth Baume-Schneider',
    StudentID: 'Federal Councillor',
    Course: 'Mechanical Engineering',
    departement: 'The Federal Department of Home Affairs (FDHA)',
    status: 'pending',
  },
];

export function DataTable() {
  return (
    <Card
      className="w-full max-h-full bg-base-100 shadow-md p-12 my-6"
      decoration="top"
      decorationColor="indigo">
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold"> Student Data </h3>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Student ID</TableHeaderCell>
            <TableHeaderCell>Course</TableHeaderCell>
            <TableHeaderCell>School</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {item.StudentID}
              </TableCell>
              <TableCell>
                {item.Course}
              </TableCell>
              <TableCell>
                {item.departement}
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={RiFlag2Line}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}