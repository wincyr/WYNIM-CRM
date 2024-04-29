import {
    Button,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';
import { DeleteData } from './DeleteData';
import { EditData } from './EditData';

const dataDocu = [
    {
        fullname: 'Viola Amherd',
        email: 'email@gmail.com',
        resume: 'Federal Councillor',
        tor:
            'active',
        diploma: 'active',
        passport: 'active',
        eptr: 'active',
        safr: 'active',
    },
    {
        fullname: 'Albert Rösti',
        email: 'email@gmail.com',
        resume: 'Federal Councillor',
        tor:
            'active',
        diploma: 'active',
        passport: 'active',
        eptr: 'active',
        safr: 'active',
    },
    {
        fullname: 'Beat Jans',
        email: 'email@gmail.com',
        resume: 'Federal Councillor',
        tor: 'active',
        diploma: 'active',
        passport: 'active',
        eptr: 'active',
        safr: 'active',
    },
    {
        fullname: 'Ignazio Cassis',
        email: 'email@gmail.com',
        resume: 'Federal Councillor',
        tor: 'active',
        diploma: 'active',
        passport: 'active',
        eptr: 'active',
        safr: 'active',
    },
];

export function DocumentData() {
    return (
        <Card
            className="w-full max-h-full bg-base-100 shadow-md p-12 mb-6 mt-8"
            decoration="top"
            decorationColor="indigo">
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-bold"> Documents </h3>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Resume </TableHeaderCell>
                        <TableHeaderCell>Transcript of Records</TableHeaderCell>
                        <TableHeaderCell>Diploma</TableHeaderCell>
                        <TableHeaderCell>Passport</TableHeaderCell>
                        <TableHeaderCell>English Proficiency Test Result</TableHeaderCell>
                        <TableHeaderCell>School Application Fee Receipt</TableHeaderCell>
                        <TableHeaderCell>Actions</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataDocu.map((item) => (
                        <TableRow key={item.fullname}>
                            <TableCell>{item.fullname}</TableCell>
                            <TableCell>
                                {item.email}
                            </TableCell>
                            <TableCell>
                                {item.resume}
                            </TableCell>
                            <TableCell>
                                {item.tor}
                            </TableCell>
                            <TableCell>
                                {item.diploma}
                            </TableCell>
                            <TableCell>
                                {item.passport}
                            </TableCell>
                            <TableCell>
                                {item.eptr}
                            </TableCell>
                            <TableCell>
                                {item.safr}
                            </TableCell>
                            <TableCell>
                                <EditData>
                                    {({ toggle }) => (
                                        <Button className="mx-2" color='blue' onClick={toggle}> Edit </Button>
                                    )}
                                </EditData>
                                <DeleteData>
                                    {({ toggle }) => (
                                        <Button className="mx-2" color='red' onClick={toggle}> Delete </Button>
                                    )}
                                </DeleteData>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}