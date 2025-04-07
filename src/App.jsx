import styles from './App.module.css';
import isEqual from 'lodash/isEqual';

export default function App() {
	const object = { a: 1 };
	const other = { a: 1 };

	const result = isEqual(object, other);

	console.log(result);

	return (
		<div className={styles.block}>
			<button className={styles.button}>click</button>
		</div>
	);
}
