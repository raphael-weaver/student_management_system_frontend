import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';

const StudentManagementSystemHeader = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                Student Management System
            </Typography>
        </Toolbar>
    </AppBar>
);

export default StudentManagementSystemHeader;