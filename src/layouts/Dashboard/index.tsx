import React from 'react';
import Box from '@mui/material/Box';
import TopBar from './TopBar'
//import Grid from '@mui/material/Grid';

interface Props{
    children: React.ReactNode
}

const DashboardLayout = ({ children } : Props) : JSX.Element => {
    return (
        <Box>
            <TopBar />
            <Box sx={{
                marginTop : 5
                }}
            >
                { children }
            </Box>

            
        </Box>
    )
};

export default DashboardLayout;