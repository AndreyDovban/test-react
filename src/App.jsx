import styles from './App.module.css';
import { Form } from './components';
import { useEffect, useState } from 'react';

export default function App() {
	const [text, setText] = useState('');

	useEffect(() => {
		const timerId = setTimeout(() => {
			setText('Example text');
		}, 1000);
		return () => clearTimeout(timerId);
	}, []);

	return (
		<div className={styles.block}>
			<Form text={text} />
			{/* <button className={styles.button}>click</button> */}
		</div>
	);
}
