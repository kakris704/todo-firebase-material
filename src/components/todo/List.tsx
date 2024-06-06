import React, { useState } from 'react'
import ListMUI from '@mui/material/List'
import { Avatar, Box, Divider, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import { Send, Settings } from '@mui/icons-material'

const TempTodoList = ({ Itemindex, selectIndex, setSelectIndex }: {Itemindex: number, selectIndex: number, setSelectIndex: Function}) => {

  const handleItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectIndex(index);
  }

  return (
    <ListItemButton
      selected={selectIndex === Itemindex}
      onClick={(event) => handleItemClick(event, Itemindex)}
      sx={{
        '&.Mui-selected': {
          color:'blue'
        }
      }}
    >
      <ListItemText>やることリスト</ListItemText>
    </ListItemButton>
  )
}

const List = () => {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div className='list grid-item'>
        <ListMUI sx={{ width: '100%'}} component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>R</Avatar>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant='h6'>Reload</Typography>
              </ListItemText>
              <Settings color='action'/>
            </ListItemButton>
            <Divider sx={{mb:1, mt:1}} variant='middle'/>
            <div className='folderList'>
              <TempTodoList Itemindex={0} selectIndex={selectIndex} setSelectIndex={setSelectIndex}/>
              <TempTodoList Itemindex={1} selectIndex={selectIndex} setSelectIndex={setSelectIndex}/>
              <TempTodoList Itemindex={2} selectIndex={selectIndex} setSelectIndex={setSelectIndex}/>
              <TempTodoList Itemindex={3} selectIndex={selectIndex} setSelectIndex={setSelectIndex}/>
            </div>
        </ListMUI>
    </div>
  )
}

export default List