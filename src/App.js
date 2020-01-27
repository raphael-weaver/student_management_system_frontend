import React, { Fragment } from 'react';
import './App.css';
import {
    CssBaseline,
    withStyles,
} from '@material-ui/core';

import StudentManagementSystemHeader from './main/StudentManagementSystemHeader';
import StudentManagementSystem from './main/StudentManagementSystem';

const styles = theme => ({
    main: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2),
        },
    },
});

const App = ({ classes }) => (
    <Fragment>
        <CssBaseline />
        <StudentManagementSystemHeader />
        <main className={classes.main}>
            <StudentManagementSystem />
        </main>
    </Fragment>
);

export default withStyles(styles)(App);
