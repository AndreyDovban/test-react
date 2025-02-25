import { useState, useEffect, useMemo } from 'react';
import styles from './App.module.css';

export default function App() {
	const [data, setData] = useState({});
	const [id, setId] = useState(1);
	async function fetchData(id) {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const data = await response.json();
		return data;
	}
	useEffect(() => {
		let res = fetchData(id);
		setData(res);
	}, [id]);

	const title = useMemo(() => data.title, [data]);

	return (
		<div className={styles.block}>
			<h2>{title ? title : 'New Round'}</h2>
			<h2>{id}</h2>
			<button className={styles.button} onClick={() => setId(v => v + 1)}>
				click
			</button>
		</div>
	);
}
