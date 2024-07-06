import { Button, Dialog, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import React from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
const ListNameEdit = ({isOpen, setOpen}: {isOpen:boolean, setOpen:Function}) => {

  // 閉じた時
  const handleClose = () => {
    setOpen(false);
  }

  // 更新ボタンクリック時
  const handleChange = () => {
    setOpen(false);
  }

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