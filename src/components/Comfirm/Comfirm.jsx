import { createPortal } from 'react-dom';
import styles from './Comfirm.module.css';
import cn from 'classnames';
import Alarm from '../../assets/svg/alarm.svg?react';

const portal = document.querySelector('#portal');

/**
 * Компонент запрос подтверждения
 * @param {string} text Текст уведомления
 * @param {{text:string, isOpen:boolean, isSuccessful: boolean}} note Состояние объекта уведомление
 * @param {function} setNote Изменение состояния объекта уведомление
 * @param {...any} props Неопределённое количество прараметров для работы с HTML элементами
 * @returns {JSXElement}
 */
export function Comfirm({ note, setNote, ...props }) {
	return createPortal(
		<div
			className={cn(styles.block, {
				[styles.hide]: !note.isOpen,
				[styles.good]: note.isSuccessful == true,
				[styles.bad]: note.isSuccessful == false,
			})}
			onClick={() => setNote({ ...note, isOpen: false })}
			{...props}
		>
			<div className={styles.text_block}>
				<Alarm
					className={cn(styles.icon, {
						[styles.good]: note.isSuccessful == true,
						[styles.bad]: note.isSuccessful == false,
					})}
				/>
				<span className={styles.text}>{note.text}</span>
			</div>
			<div className={styles.buttons_block}>
				<button>yes</button>
				<button>no</button>
			</div>
		</div>,
		portal,
	);
}
