import React from 'react'
import { Route, Routes } from 'react-router'

import Header from './assets/Componets/Header/Header'
import AddData from './assets/Componets/addData/addData'
import View from './assets/Componets/View/View'
import EditData from './assets/Componets/EditData/Edit'


function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<AddData/>}></Route>
				<Route path='/View' element={<View/>}></Route>
				<Route path='/editproduct/:id' element={<EditData/>}></Route>
				
			</Routes>
		</>
	)
}

export default App
