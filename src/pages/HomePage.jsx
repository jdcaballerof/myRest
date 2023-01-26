import React from 'react'

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const HomePage = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold " >HomePage</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo inventore suscipit quasi velit beatae corporis. Dolore fugiat excepturi sed, unde molestiae perspiciatis deleniti, iste, et neque error eum voluptates sunt.</p>
        
        <div className="p-2 bg-">
            <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
        </div>
    </div>
  )
}

