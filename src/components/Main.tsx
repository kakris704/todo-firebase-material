import React, { useState } from 'react'
import './main.css';
import { Container, Divider, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import Todos from './todo/Todos';
import Detail from './todo/Detail';
import List from './todo/List';

const Main = () => {

	// テスト用データ
	const [taskDemo, setTaskDemo] = useState({
		lists: [ // Todoリストの配列
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
		]
	});

	// 選択中リストのindex
	const [selectListIndex, setSelectListIndex] = useState(0);


	return (
		<div className='main'>
			<Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
				<Paper elevation={5} sx={{ width: '100%', height: '90vh', borderRadius: '10px', overflow:'hidden' }}>
					<Grid container spacing={0} sx={{ width: '100%', height: '100%'}}>
						<Grid xs={3} sx={{borderRight:'solid 1px rgb(224, 224, 224)'}} key={'list'}>
							<List taskData={taskDemo} setTaskData={setTaskDemo} selectIndex={selectListIndex} setSelectIndex={setSelectListIndex}/>
						</Grid>
						<Grid xs={9} key={'todos'} sx={{height:'100%'}}>
							<Todos taskData={taskDemo} setTaskData={setTaskDemo} selectIndex={selectListIndex}/>
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</div>
	)
}

export default Main