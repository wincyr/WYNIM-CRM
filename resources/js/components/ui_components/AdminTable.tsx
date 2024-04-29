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
import { DeleteAdminDialog } from './DeleteAdminDialog'
import { EditAdminDialog } from './EditAdminDialog'

const data = [
    {
        adminID: 'Viola Amherd',
        adminName: 'Federal Councillor',
        email:
            'The Federal Department of Defence, Civil Protection and Sport (DDPS)',
        status: 'active',
    },
    {
        adminID: 'Albert Rösti',
        adminName: 'Federal Councillor',
        email:
            'The Federal Department of the Environment, Transport, Energy and Communications (DETEC)',
        status: 'active',
    },
    {
        adminID: 'Beat Jans',
        adminName: 'Federal Councillor',
        email: 'The Federal Department of Justice and Police (FDJP)',
        status: 'active',
    },

];

export function AdminTable() {
    return (
        <Card
            className="w-full max-h-full bg-base-100 shadow-md p-12 my-6 mt-12"
            decoration="top"
            decorationColor="indigo">
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">WYNIM CRM Admins</h3>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Admin ID </TableHeaderCell>
                        <TableHeaderCell>Admin Name </TableHeaderCell>
                        <TableHeaderCell>Email </TableHeaderCell>
                        <TableHeaderCell>Actions </TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.adminID}>
                            <TableCell>{item.adminID}</TableCell>
                            <TableCell>
                                {item.adminName}
                            </TableCell>
                            <TableCell>
                                {item.email}
                            </TableCell>
                            <TableCell className='flex'>
                                <EditAdminDialog>
                                    {({ toggle }) => (
                                        <Button className="mx-2" color='blue' onClick={toggle}> Edit </Button>
                                    )}
                                </EditAdminDialog>
                                <DeleteAdminDialog>
                                    {({ toggle }) => (
                                        <Button className="mx-2" color='red' onClick={toggle}> Delete </Button>
                                    )}
                                </DeleteAdminDialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}