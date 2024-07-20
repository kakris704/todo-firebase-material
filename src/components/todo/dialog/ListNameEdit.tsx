import { Button, Dialog, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
const ListNameEdit = ({isOpen, setOpen, setTaskData, selectIndex, taskData, updateDoc}: {isOpen:boolean, setOpen:Function, setTaskData:Function, selectIndex:number, taskData:any, updateDoc:Function}) => {

  const [inputText, setInputText] = useState("");

  // 閉じた時
  const handleClose = () => {
    setOpen(false);
  }

  // 更新ボタンクリック時
  const handleChange = () => {
    if(inputText !== "") {
      setTaskData((prev: any) => {
        const addData = {...prev};
        addData.lists[selectIndex].name = inputText;
        setOpen(false);
        updateDoc(addData);
        setInputText("");
        return addData;
      })
    }
  }

  useEffect(() => {
    setInputText(taskData.lists[selectIndex].name);
  }, [isOpen])

  return (
    <div className='create-list'>
        <Dialog
          open={isOpen}
          onClose={handleClose}
        >
          <DialogTitle>
            {"リスト名の編集"}
          </DialogTitle>
          <DialogContent>
            <Stack direction='column'>
              <TextField
                id="standard-error"
                variant="standard"
                label="リスト名"
                sx={{mb:2}}
                onChange={(e) => {setInputText(e.target.value)}}
                value={inputText}
              />
              <Button variant='contained' endIcon={<BorderColorIcon />} sx={{width:'60%', ml:'auto', mr:'auto'}} onClick={handleChange}>
                更新
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default ListNameEdit