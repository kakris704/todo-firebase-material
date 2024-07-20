import { Button, Dialog, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const CreateList = ({isOpen, setOpen, setTaskData, updateDoc}: {isOpen:boolean, setOpen:Function, setTaskData:Function, updateDoc:Function}) => {

  const [listName, setListName] = useState("");

  // 閉じた時
  const handleClose = () => {
    setOpen(false);
  }

  // 作成ボタンクリック時
  const handleCreate = () => {
    if(listName !== "") {
      setOpen(false);
      setTaskData((prev:any) => {
        const addData = {...prev}; // 代入するデータ
        const defaultData = {
          name: listName,
          tasks:{
            completed:[],
            incomplete:[]
          }
        }
        addData.lists.push(defaultData); // テンプレを追加
        setListName("");
        updateDoc(addData);
        return addData;
      });
    }
  }

  return (
    <div className='create-list'>
        <Dialog
          open={isOpen}
          onClose={handleClose}
        >
          <DialogTitle>
            {"リストの作成"}
          </DialogTitle>
          <DialogContent>
            <Stack direction='column'>
              <TextField
                id="standard-error"
                variant="standard"
                label="リスト名"
                sx={{mb:2}}
                onChange={(e) => setListName(e.target.value)}
                value={listName}
              />
              <Button variant='contained' endIcon={<CreateNewFolderIcon />} sx={{width:'60%', ml:'auto', mr:'auto'}} onClick={handleCreate}>
                作成
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default CreateList