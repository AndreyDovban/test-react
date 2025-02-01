import styles from './ResponseMail.module.css';

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
	return <div className={styles.block}>{JSON.stringify(data, 0, 4)}</div>;
}
