import { useState } from 'react';
import styles from './App.module.css';

export default function App() {
	const [text, setText] = useState('text');
	function test() {
		setText({ text: 'text' });
	}

	return (
		<div className={styles.block}>
			<h1>{text}</h1>
			<button className={styles.button} onClick={test}>
				click
			</button>
		</div>
	);
}
