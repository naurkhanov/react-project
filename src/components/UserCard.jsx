function UserCard({ name, age, profession }) {
	return (
		<div
			style={{
				border: '1px solid #ccc',
				borderRadius: '8px',
				padding: '10px',
				marginBottom: '10px',
				backgroundColor: '#f9f9f9',
			}}
		>
			<h3>{name}</h3>
			<p>Возраст: {age}</p>
			<p>Профессия: {profession}</p>
		</div>
	)
}

export default UserCard
