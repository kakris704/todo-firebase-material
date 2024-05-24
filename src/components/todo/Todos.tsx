import { AppBar, Typography } from '@mui/material'
import React from 'react'

const Todos = () => {
  return (
    <div className='todos grid-item'>
        <AppBar position="static" sx={{padding: '10px'}}>
            <Typography variant='h6'>こんにちは</Typography>
        </AppBar>
    </div>
  )
}

export default Todos