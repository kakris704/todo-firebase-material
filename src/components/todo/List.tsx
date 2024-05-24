import React from 'react'
import ListMUI from '@mui/material/List'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Send } from '@mui/icons-material'

const List = () => {
  return (
    <div className='list grid-item'>
        <ListMUI sx={{ width: '100%'}} component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton>
                <ListItemIcon>
                    <Send />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
            </ListItemButton>
        </ListMUI>
    </div>
  )
}

export default List