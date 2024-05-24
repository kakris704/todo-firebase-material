import React from 'react'
import './main.css';
import { Container, Grid, Paper } from '@mui/material'
import Todos from './todo/Todos';
import Detail from './todo/Detail';
import List from './todo/List';

const Main = () => {
	return (
		<div className='main'>
			<Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
				<Paper elevation={5} sx={{ width: '100%', height: '90vh' }}>
					<Grid container spacing={0} sx={{ width: '100%', height: '100%'}}>
						<Grid item xs={3}>
							<List />
						</Grid>
						<Grid item xs={6}>
							<Todos />
						</Grid>
						<Grid item xs={3}>
							<Detail />
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</div>
	)
}

export default Main