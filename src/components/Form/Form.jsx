import { useForm } from 'react-hook-form';
import styles from './Form.module.css';

export function Form() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = data => console.log(data);

	console.log(watch('example')); // watch input value by passing the name of it

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form className={styles.block} onSubmit={handleSubmit(onSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			<input className={styles.inp} defaultValue="test" {...register('example')} />

			{/* include validation with required or other standard HTML validation rules */}
			<input className={styles.inp} {...register('exampleRequired', { required: true })} />
			{/* errors will return when field validation fails  */}
			{errors.exampleRequired && <span>This field is required</span>}

			<input className={styles.button} type="submit" />
		</form>
	);
}
