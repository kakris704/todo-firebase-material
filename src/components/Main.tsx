import React from 'react'
import './main.css';
import { Container, Divider, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import Todos from './todo/Todos';
import Detail from './todo/Detail';
import List from './todo/List';

const Main = () => {
	return (
		<div className='main'>
			<Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
				<Paper elevation={5} sx={{ width: '100%', height: '90vh', borderRadius: '10px', overflow:'hidden' }}>
					<Grid container spacing={0} sx={{ width: '100%', height: '100%'}}>
						<Grid xs={3} sx={{borderRight:'solid 1px rgb(224, 224, 224)'}}>
							<List />
						</Grid>
						<Grid xs={9}>
							<Todos />
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</div>
	)
}

export default Main