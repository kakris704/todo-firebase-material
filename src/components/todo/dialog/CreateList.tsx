import { Button, Dialog, DialogContent, DialogTitle, Stack, TextField } from '@mui/material'
import React from 'react'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const CreateList = ({isOpen, setOpen}: {isOpen:boolean, setOpen:Function}) => {

  const handleClose = () => {
    setOpen(false);
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
              />
              <Button variant='contained' endIcon={<CreateNewFolderIcon />} sx={{width:'60%', ml:'auto', mr:'auto'}}>
                作成
              </Button>
            </Stack>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default CreateList