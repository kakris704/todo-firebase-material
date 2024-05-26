import { ModeEdit, Add, TaskAlt, MoreVert } from '@mui/icons-material'
import { AppBar, Checkbox, IconButton, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const Todos = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(prev => !prev)
  }

  return (
    <div className='todos grid-item' style={{position:'relative'}}>
        <AppBar position="static" sx={{padding: '7px'}} color='primary'>
          <Stack direction='row' sx={{justifyContent:'space-between'}}>
            <div className="title-wrapper">
              <TaskAlt />
              <Typography variant='h6' sx={{alignItems:'center', display: 'flex'}}>やることリスト</Typography>
            </div>
            <IconButton>
              <ModeEdit sx={{color:'white'}}/>
            </IconButton>
          </Stack>
        </AppBar>
        <div className="text-field-wrapper">
          <Paper sx={{width: '95%', height:'50px', position: 'absolute', bottom:'30px'}} elevation={3}>
            <Stack direction='row' sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <InputBase
                placeholder="Todoを追加"
                inputProps={{ 'aria-label': 'Todoを追加する' }}
                sx={{height: '100%', width: '100%', '.MuiInputBase-input': {
                  height: '45px',
                  fontSize: '1.3rem',
                  pl: '15px'
                }}}
              />
              <IconButton sx={{width:'40px', height:'40px', mr:'5px'}}>
                <Add fontSize='medium'/>
              </IconButton>
            </Stack>
          </Paper>
        </div>

        <List sx={{overflow:'auto'}}>
          <ListSubheader>未完了</ListSubheader>
          <ListItem
            secondaryAction={
              <IconButton>
                <MoreVert />
              </IconButton>
            }
          >
            <ListItemIcon>
              <Checkbox 
                checked={checked}
                onChange={handleChange}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='h6'>めしくう</Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            secondaryAction={
              <IconButton>
                <MoreVert />
              </IconButton>
            }
          >
            <ListItemIcon>
              <Checkbox 
                checked={checked}
                onChange={handleChange}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='h6'>めしくう</Typography>
            </ListItemText>
          </ListItem>
          
          <ListSubheader>完了済み</ListSubheader>
          <ListItem
            secondaryAction={
              <IconButton>
                <MoreVert />
              </IconButton>
            }
          >
            <ListItemIcon>
              <Checkbox 
                checked={checked}
                onChange={handleChange}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='h6'>めしくう</Typography>
            </ListItemText>
          </ListItem>
        </List>
        
    </div>
  )
}

export default Todos