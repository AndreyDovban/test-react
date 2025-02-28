import { useState } from 'react';
import styles from './App.module.css';
import { Comfirm } from './components';

export default function App() {
	const [confirm, setConfirm] = useState({ text: 'How are you?' });

	function handlerOpenConfirm() {
		setConfirm({ ...confirm, isOpen: !confirm.isOpen, func: testFunc });
	}

	function testFunc() {
		console.log('work');
	}

	return (
		<div className={styles.block}>
			<button className={styles.button} onClick={handlerOpenConfirm}>
				click
			</button>
			<Comfirm confirm={confirm} setConfirm={setConfirm} />
		</div>
	);
}
