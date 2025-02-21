import styles from './App.module.css';
import { Note } from './components';

export default function App() {
	return (
		<div className={styles.block}>
			<Note text={'Hello notofication'} />
			<button>click</button>
		</div>
	);
}
