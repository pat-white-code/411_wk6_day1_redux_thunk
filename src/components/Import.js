import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import TableContainer from '@material-ui/core/TableContainer';
import React from 'react';


const Import = props => { 
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
            maxWidth: 700
        },
    });
    
    const classes = useStyles();
    return ( 
        <div>
            <Button variant='contained' color='secondary' onClick={props.fetchMakes}>
                Import
            </Button>
            <Container component={Paper}> 
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Makes</TableCell>
                            <TableCell align='right'>ID</TableCell>
                            <TableCell align='right'>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.makes.map(make => {
                            return (
                                <TableRow key={make.id}>
                                    <TableCell>{make.MakeName}</TableCell>
                                    <TableCell align='right'>{make.MakeId}</TableCell>
                                    <TableCell align='right'>Action</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Container>
        </div>
    );
}

export default Import