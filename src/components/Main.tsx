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
	const [taskData, setTaskData] = useState<any>({lists: [ // Todoリストの配列
		{
			name: "list1", // リストの名前
			tasks: { // タスクの一覧
				completed: [ // 完了済み
					{text:"a"},
					{text:"ピカチュウ"}
				  ],
				incomplete:[ // 未完了
					{text:"b"},
					{text:"c"}
				  ]
			}
		},
		{
			name: "list2",
			tasks: {
				completed: [
				],
				incomplete: [
					{text:"それはそう"}
				]
			}
		},
		{
			name: "list3",
			tasks: {
				completed:[],
				incomplete:[]
			}
		}
	]});

	// 選択中リストのindex
	const [selectListIndex, setSelectListIndex] = useState(0);

	const updateData = async () => {
		const user = auth.currentUser;
		if(user !== null) {
			await setDoc(doc(db, "taskData", user.uid), {
				lists: taskData.lists
			});
		}
	}

	useEffect(() => {
		const user = auth.currentUser
		if(user !== null) {
			const unSub = onSnapshot(doc(db, "taskData", "ZgYB55MuASTtiHhHNr8FRkukAiR2"), (snapshot:any) => {
				setTaskData({lists:snapshot.data().lists})
			});
			return () => {
				unSub();
			}
		}
		
		
	}, [])

	return (
		<div className='main'>
			<Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
				<Paper elevation={5} sx={{ width: '100%', height: '90vh', borderRadius: '10px', overflow:'hidden' }}>
					<Grid container spacing={0} sx={{ width: '100%', height: '100%'}}>
						<Grid xs={3} sx={{borderRight:'solid 1px rgb(224, 224, 224)'}} key={'list'}>
							<List taskData={taskData} setTaskData={setTaskData} selectIndex={selectListIndex} setSelectIndex={setSelectListIndex}/>
						</Grid>
						<Grid xs={9} key={'todos'} sx={{height:'100%'}}>
							<Todos taskData={taskData} setTaskData={setTaskData} selectIndex={selectListIndex}/>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</div>
	)
}

export default Main