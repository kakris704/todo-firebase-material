import { ModeEdit, Add, TaskAlt, MoreVert } from '@mui/icons-material'
import { AppBar, Checkbox, IconButton, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const TempItem = ({handleClick}: {handleClick:any}) => {
  return (
    <ListItem
            secondaryAction={
              <div>
              <IconButton onClick={handleClick}>
                <MoreVert />
              </IconButton>
              </div>
            }
            sx={{'&:hover .MuiListItemSecondaryAction-root': {
              opacity: 1
            },
              '.MuiListItemSecondaryAction-root': {
              transition: '.15s ease',
              opacity: 0,
            },
              '&:hover': {
                backgroundColor: '#f5f5f5'
              },
              transition: '.15s ease'
            }}
          >
            <ListItemIcon>
              <Checkbox 
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='h6'>めしくう</Typography>
            </ListItemText>
          </ListItem>
  );
}

const TaskMenu = ({anchorEl, open, handleClose}: {anchorEl:null | HTMLElement, open:boolean, handleClose:any}) => {
  return (
    <Menu
      id="task-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>削除</MenuItem>
    </Menu>
  )
}

const Todos = () => {
  const [checked, setChecked] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <TempItem handleClick={handleClick}/>
            <TempItem handleClick={handleClick}/>
          <ListSubheader>完了済み</ListSubheader>
            <TempItem handleClick={handleClick}/>
        </List>
        
        <TaskMenu anchorEl={anchorEl} open={open} handleClose={handleClose}/>
        
    </div>
  )
}

export default Todos