import React from 'react'
import './main.css';
import { Container, Divider, Grid, Paper } from '@mui/material'
import Todos from './todo/Todos';
import Detail from './todo/Detail';
import List from './todo/List';

const Main = () => {
	return (
		<div className='main'>
			<Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
				<Paper elevation={5} sx={{ width: '100%', height: '90vh', borderRadius: '10px' }}>
					<Grid container spacing={0} sx={{ width: '100%', height: '100%'}}>
						<Grid item xs={3}>
							<List />
						</Grid>
						<Divider orientation='vertical' />
						<Grid item xs={7}>
							<Todos />
						</Grid>
						<Divider orientation='vertical' />
						<Grid item xs={2}>
							<Detail />
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</div>
	)
}

export default Main