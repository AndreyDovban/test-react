import { useState } from 'react';
import styles from './App.module.css';
import { Comfirm } from './components';

export default function App() {
	const [note, setNote] = useState({ text: 'How are you?' });

	function handlerOpenConfirm() {
		setNote({ ...note, isOpen: !note.isOpen });
	}

	return (
		<div className={styles.block}>
			<button className={styles.button} onClick={handlerOpenConfirm}>
				click
			</button>
			<Comfirm note={note} setNote={setNote} />
		</div>
	);
}
