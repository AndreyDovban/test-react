import styles from './ResponseMail.module.css';
import { v4 as uuid } from 'uuid';

export function ResponseMail() {
	const data = {
		error: 'not',
		prod_names: {
			NewProduct:
				'Для того, чтобы протестировать всю функциональность продукта NewProduct, необходимо получить файл лицензионного ключа, обратившись в отдел продаж по телефону: +7 (495) 777-77-77.',
		},
		super_obj: {
			NewProduct: {
				'23fed9951ed0467e9612bae5e3a07dea': {
					file_desc: 'Руководство по установке',
					file_name: 'Руководсво по установке.pdf',
					file_uuid: 'f12c0343b9524e2da794bd61da497fcb',
					prod_name: 'NewProduct',
				},
				c5e4a81290f54553842075862134758c: {
					file_desc: 'Описание API',
					file_name: 'Описание API.pdf',
					file_uuid: 'b987f5c92a0f4a8ba5b7888c82a26723',
					prod_name: 'NewProduct',
				},
			},
		},
	};

	const prods = [];

	for (const key in data.prod_names) {
		const prod_items = [];
		for (const key2 in data.super_obj[key]) {
			prod_items.push(
				<p key={uuid()}>
					<span className={styles.span}> • </span>
					<a target="_blank" href={'/api/downloads-' + data.super_obj[key][key2].file_uuid} rel="noreferrer">
						{data.super_obj[key][key2].file_desc}
					</a>
				</p>,
			);
		}
		prods.push(
			<div className={styles.prod} key={uuid()}>
				<div className={styles.prod_name}>{key}</div>
				<ul>{prod_items}</ul>
				<div>{data.prod_names[key]}</div>
				<hr className={styles.hr} />
			</div>,
		);
	}

	return <div className={styles.block}>{prods}</div>;
}
