import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import TableContainer from '@material-ui/core/TableContainer';
import React from 'react';
import VertMore from './VertMore';


const Import = props => { 
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        div: {
            padding: 50,
            textAlign: 'center'
        },
        button: {
            margin: 20
        },
        tableHead: {
            color: 'black',
            fontWeight: 600,
            fontSize: 14
        }
    });
    
    const classes = useStyles();
    return ( 
        <div className={classes.div}>
            <h2>Count: {props.makes.length}</h2>
            <Button className={classes.button} variant='contained' color='secondary' onClick={props.fetchMakes}>
                Import
            </Button>
            <Container component={Paper}> 
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead} >Makes</TableCell>
                            <TableCell className={classes.tableHead} align='right'>ID</TableCell>
                            <TableCell className={classes.tableHead} align='right'>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.makes.map((make, index) => {
                            return (
                                <TableRow key={make.id}>
                                    <TableCell>{make.MakeName}</TableCell>
                                    <TableCell align='right'>{make.MakeId}</TableCell>
                                    <TableCell align='right'><VertMore deleteMake={props.deleteMake} index={index} /></TableCell>
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