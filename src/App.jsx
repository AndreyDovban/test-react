import styles from './App.module.css';
import { Form } from './components';

export default function App() {
	return (
		<div className={styles.block}>
			<Form />
			{/* <button className={styles.button}>click</button> */}
		</div>
	);
}
