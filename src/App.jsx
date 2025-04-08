import { useState } from 'react'
import Header from './components/Header'
import UserList from './components/UserList'

function App() {
	const [showUsers, setShowUsers] = useState(true)

	return (
		<div style={{ padding: '20px' }}>
			<Header />
			<button onClick={() => setShowUsers(!showUsers)}>
				{showUsers ? 'Скрыть пользователей' : 'Показать пользователей'}
			</button>
			{showUsers && <UserList />}
		</div>
	)
}

export default App
