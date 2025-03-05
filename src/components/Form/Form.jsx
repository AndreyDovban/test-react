import { useForm } from 'react-hook-form';
import styles from './Form.module.css';
import { useEffect } from 'react';

export function Form({ text }) {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		setValue,
	} = useForm({
		mode: 'all',
	});

	function myFunc(data) {
		console.log(data);
	}

	useEffect(() => {
		setValue('exampleRequired', text, { shouldValidate: true });
	}, [setValue, text]);

	return (
		<form className={styles.block} onSubmit={handleSubmit(myFunc)}>
			<label className={styles.label}>
				<span>Необязательное поле</span>
				<input className={styles.inp} defaultValue="text" {...register('example')} />
			</label>

			<label className={styles.label}>
				<span>
					Обязательное поле <span className={styles.star}>*</span>
				</span>
				<input className={styles.inp} {...register('exampleRequired', { required: true })} />
				{errors.exampleRequired && <span className={styles.isError}>This field is required</span>}{' '}
			</label>
			<input disabled={!isValid} className={styles.button} type="submit" />
		</form>
	);
}
