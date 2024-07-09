import { ModeEdit, Add, TaskAlt, MoreVert } from '@mui/icons-material'
import { AppBar, Checkbox, IconButton, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Menu, MenuItem, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ListNameEdit from './dialog/ListNameEdit';

// タスクのコンポーネント　
const TempItem = ({handleClick, text, complete = false}: {handleClick:any, text:string, complete?:boolean}) => {
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
              checked={complete}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography variant='h6'>{text}</Typography>
            </ListItemText>
          </ListItem>
  );
}

// タスクごとのメニュー
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

const Todos = ({taskData, setTaskData, selectIndex}: {taskData:any, setTaskData:any, selectIndex:number}) => {
  const [checked, setChecked] = useState(false);
  const [isEditListOpen, setEditListOpen] = useState(false); // リスト名編集用ダイアログの条件

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // TaskMenuの参照要素
  const open = Boolean(anchorEl);
  
  // タスクのオプションボタンをクリックしたとき
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // TaskMenuを閉じる時
  const handleClose = () => {
    setAnchorEl(null);

  };

  const handleChange = () => {
    setChecked(prev => !prev);
  }

  const tasks = taskData.lists[selectIndex].tasks // 選択中リストのタスク

  return (
    <div className='todos grid-item' style={{position:'relative'}}>
        <AppBar position="static" sx={{padding: '7px'}} color='primary'>
          <Stack direction='row' sx={{justifyContent:'space-between'}}>
            <div className="title-wrapper">
              <TaskAlt />
              <Typography variant='h6' sx={{alignItems:'center', display: 'flex'}}>{taskData.lists[selectIndex].name}</Typography>
            </div>
            <IconButton onClick={() => {setEditListOpen(true)}}>
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
          {(!tasks.incomplete[0] && !tasks.completed[0]) && <ListSubheader>タスクなし</ListSubheader> /* タスクが存在しない時 */}
          {tasks.incomplete[0] && <ListSubheader>未完了</ListSubheader>}
            {
              tasks.incomplete.map((data: any, index: number) => (
                    <TempItem handleClick={handleClick} text={data.text} key={index}></TempItem>
              ))
            }
          {tasks.completed[0] && <ListSubheader>完了済み</ListSubheader>}
            {
              tasks.completed.map((data: any, index:number) => (
                    <TempItem handleClick={handleClick} text={data.text} complete key={index}></TempItem>
              ))
            }
        </List>
        
        <TaskMenu anchorEl={anchorEl} open={open} handleClose={handleClose}/>
        <ListNameEdit isOpen={isEditListOpen} setOpen={setEditListOpen} />    
    </div>
    
  )
}

export default Todos