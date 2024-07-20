import React, { useEffect, useState } from 'react'
import './main.css';
import { Container, Divider, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import Todos from './todo/Todos';
import Detail from './todo/Detail';
import List from './todo/List';
import { auth, db } from '../firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

const Main = () => {

	// テスト用データ
	const [taskData, setTaskData] = useState<any>({
		lists:[
			{
				name:' ',
				tasks:{
					completed:[],
					incomplete:[]
				}
			}
		]
	});

	// 選択中リストのindex
	const [selectListIndex, setSelectListIndex] = useState(0);

	const updateDoc = async (taskData: any) => {
		const user = auth.currentUser;
		if(user !== null) {
			await setDoc(doc(db, "taskData", user.uid), {
				lists: taskData.lists
			});
		}
	}

	useEffect(() => {
		const user = auth.currentUser
		const unSub = onSnapshot(doc(db, "taskData", user!.uid), (snapshot:any) => {
			if(snapshot.data()) {
				setTaskData({lists:snapshot.data().lists});
			} else {
				updateDoc(taskData);
			}
		return () => {
			console.log('unsubscribe');
			unSub();
		}
		});
	}, [])

	return (
		<div className='main'>
			<Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
				<Paper elevation={5} sx={{ width: '100%', height: '90vh', borderRadius: '10px', overflow:'hidden' }}>
					<Grid container spacing={0} sx={{ width: '100%', height: '100%'}}>
						<Grid xs={3} sx={{borderRight:'solid 1px rgb(224, 224, 224)'}} key={'list'}>
							<List taskData={taskData} setTaskData={setTaskData} selectIndex={selectListIndex} setSelectIndex={setSelectListIndex} updateDoc={updateDoc}/>
						</Grid>
						<Grid xs={9} key={'todos'} sx={{height:'100%'}}>
							<Todos taskData={taskData} setTaskData={setTaskData} selectIndex={selectListIndex} updateDoc={updateDoc}/>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</div>
	)
}

export default Main