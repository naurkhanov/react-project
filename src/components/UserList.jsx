import UserCard from './UserCard'

const users = [
	{ id: 1, name: 'Анна', age: 25, profession: 'Дизайнер' },
	{ id: 2, name: 'Иван', age: 30, profession: 'Разработчик' },
	{ id: 3, name: 'Мария', age: 22, profession: 'Тестировщик' },
]

function UserList() {
	return (
		<div style={{ marginTop: '20px' }}>
			{users.map(user => (
				<UserCard key={user.id} {...user} />
			))}
		</div>
	)
}

export default UserList
