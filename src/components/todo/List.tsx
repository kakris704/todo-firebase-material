import React, { useState } from 'react'
import ListMUI from '@mui/material/List'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Send } from '@mui/icons-material'

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
    >
      <ListItemText primary='やることリスト'/>
    </ListItemButton>
  )
}

const List = () => {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div className='list grid-item'>
        <ListMUI sx={{ width: '100%'}} component="nav" aria-labelledby="nested-list-subheader">
            <TempTodoList Itemindex={0} selectIndex={selectIndex} setSelectIndex={setSelectIndex}/>
            <TempTodoList Itemindex={1} selectIndex={selectIndex} setSelectIndex={setSelectIndex}/>
            <TempTodoList Itemindex={2} selectIndex={selectIndex} setSelectIndex={setSelectIndex}/>
            <TempTodoList Itemindex={3} selectIndex={selectIndex} setSelectIndex={setSelectIndex}/>
        </ListMUI>
    </div>
  )
}

export default List