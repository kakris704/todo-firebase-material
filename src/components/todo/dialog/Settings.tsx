import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { auth } from '../../../firebase'

// ユーザー設定ダイアログ
const Settings = ({isOpen, setOpen}: {isOpen:boolean, setOpen:Function}) => {
  const handleLogOut = () => {
    auth.signOut();
  }

  return (
    <div className='settings'>
      <Dialog
          open={isOpen}
          onClose={() => setOpen(false)}
        >
          <DialogTitle>
            {"ユーザー設定"}
          </DialogTitle>
          <DialogContent>
            <Button onClick={handleLogOut}>ログアウト</Button>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default Settings