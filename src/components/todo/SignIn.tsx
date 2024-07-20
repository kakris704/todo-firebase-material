import { Button, Container, Paper } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'

const SignIn = () => {
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        console.log('login');
      }).catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='signIn'>
      <Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
				<Paper elevation={5} sx={{ width: '100%', height: '90vh', borderRadius: '10px', overflow:'hidden' }}>
          <Button onClick={handleSignIn}>ログイン</Button>
				</Paper>
			</Container>
    </div>
  )
}

export default SignIn