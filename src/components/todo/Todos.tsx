import { ModeEdit } from '@mui/icons-material'
import { AppBar, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

const Todos = () => {
  return (
    <div className='todos grid-item'>
        <AppBar position="static" sx={{padding: '7px'}} color='primary'>
          <Stack direction='row' sx={{justifyContent:'space-between'}}>
            <Typography variant='h6' sx={{alignItems:'center', display: 'flex'}}>やることリスト</Typography>
            <IconButton>
              <ModeEdit sx={{color:'white'}}/>
            </IconButton>
          </Stack>
        </AppBar>
    </div>
  )
}

export default Todos