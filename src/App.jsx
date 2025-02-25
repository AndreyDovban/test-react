import styles from './App.module.css';

export default function App() {
	function test() {
		console.log('work');
	}

	return (
		<div className={styles.block}>
			<button className={styles.button} onClick={test}>
				click
			</button>
		</div>
	);
}
