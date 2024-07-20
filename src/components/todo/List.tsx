import React, { useState } from 'react'
import ListMUI from '@mui/material/List'
import { Avatar, Box, Divider, Fab, IconButton, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import { Send, Settings, Add, Delete } from '@mui/icons-material'
import CreateList from './dialog/CreateList'
import ListNameEdit from './dialog/ListNameEdit'
import { auth } from '../../firebase'

// リスト一つのコンポーネント　改修予定
const TempTodoList = ({ Itemindex, selectIndex, setSelectIndex, text }: {Itemindex: number, selectIndex: number, setSelectIndex: Function, text:string}) => {

  // Listをクリックしたとき
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
        '&.Mui-selected .MuiListItemText-primary': {
          fontWeight:700,
          ml:1,
          color:'#1100ff',
        },
        '&.Mui-selected::before': {
          position:'absolute',
          content:'""',
          width:'10px',
          height:'100%',
          ml:'-20px',
          backgroundColor:'#2189ff'
        }
      }}
    >
      <ListItemText>{text}</ListItemText>
    </ListItemButton>
  )
}

const List = ({taskData, setTaskData, selectIndex, setSelectIndex}: any) => {

  const [isCreateListOpen, setCreateListOpen] = useState(false); // リストを作成するダイアログの条件

  const handleListDelete = () => {
    if(taskData.lists[1]) {
      setTaskData((prev: any) => {
        const removeData = {...prev};
        removeData.lists.splice(selectIndex, 1);
        if(selectIndex > 0) setSelectIndex((prev:number) => prev - 1)
        return removeData;
      });
    }
  }
  
  return (
    <div className='list grid-item'>
        <ListMUI sx={{ width: '100%'}} component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={auth.currentUser?.photoURL ?? ""}/>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant='h6'>{auth.currentUser?.displayName}</Typography>
              </ListItemText>
              <Settings color='action'/>
            </ListItemButton>
            <Divider sx={{mb:0, mt:1}} variant='middle'/>
            <div className="list-option-wrapper">
              <IconButton size="small" onClick={handleListDelete}>
                <Delete fontSize="small"/>
              </IconButton>
              <IconButton size="small" onClick={() => {setCreateListOpen(true)}}>
                <Add fontSize="small"/>
              </IconButton>
            </div>
            <div className='folderList'>
              {
                taskData.lists.map((data: any, index:number) => (
                  <TempTodoList Itemindex={index} selectIndex={selectIndex} setSelectIndex={setSelectIndex} text={data.name} key={index}/>
                ))
              }
            </div>
        </ListMUI>
      <CreateList isOpen={isCreateListOpen} setOpen={setCreateListOpen} setTaskData={setTaskData}/>
    </div>
  )
}

export default List