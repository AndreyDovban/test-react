import { useState } from 'react';
import styles from './App.module.css';
import { Note } from './components';

export default function App() {
	const [isOpen, setIsOpen] = useState(false);

	function changeIsOpen(val) {
		setIsOpen(val);
	}

	return (
		<div className={styles.block}>
			<Note text={'Hello notofication'} isOpen={isOpen} setIsOpen={changeIsOpen} />
			<button className={styles.button} onClick={() => changeIsOpen(!isOpen)}>
				click
			</button>
		</div>
	);
}
