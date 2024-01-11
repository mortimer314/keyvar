import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    
    console.info('You clicked a breadcrumb.');
}

export default function BreadcrumbsWrapper({ breadcrumbsData }) {

    const breadcrumbs = breadcrumbsData.map((item, index) => {
        if (breadcrumbsData.length === (index + 1)) {
            return (
                <Typography key={item.id} className='text-sm text-gray-800 dark:text-gray-400' >
                    {item.title}
                </Typography>
            )
        }
        return (
            <Link key={item.id} to={item.href} className='text-sm text-blue-600' onClick={handleClick}>
                {item.title}
            </Link>
        )
    })



    return (
        <Stack spacing={2}  >
            <Breadcrumbs separator={<apan className='text-gray-800 dark:text-gray-400'>›</apan>} aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>

        </Stack>
    );
}