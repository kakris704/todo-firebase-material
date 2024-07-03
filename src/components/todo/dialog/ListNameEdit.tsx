import { Button, Dialog, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import React from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
const ListNameEdit = ({isOpen, setOpen}: {isOpen:boolean, setOpen:Function}) => {

  const handleClose = () => {
    setOpen(false);
  }

  const handleCreate = () => {
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
              <Button variant='contained' endIcon={<BorderColorIcon />} sx={{width:'60%', ml:'auto', mr:'auto'}} onClick={handleCreate}>
                作成
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default ListNameEdit