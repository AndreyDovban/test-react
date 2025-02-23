import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
// import { createPortal } from 'react-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));

// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { date: new Date() };
// 	}

// 	componentDidMount() {
// 		this.timerId = setInterval(() => {
// 			this.tick();
// 		}, 1000);
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.timerID);
// 	}

// 	tick() {
// 		this.setState({ date: new Date() });
// 	}

// 	render() {
// 		// console.log('render');

// 		return (
// 			<div>
// 				<h1>Hello</h1>
// 				<div>{this.state.date.toLocaleTimeString()}</div>
// 			</div>
// 		);
// 	}
// }

console.log('1', document.querySelector('#root'));

root.render(
	<StrictMode>
		{/* <Clock /> */}
		<App />
	</StrictMode>,
);
console.log('2', document.querySelector('#root'));

// function Clock() {
// 	const [date, setDate] = useState(new Date());

// 	console.log('render');

// 	useEffect(() => {
// 		const timerId = setInterval(() => {
// 			setDate(new Date());
// 		}, 1000);
// 	}, []);

// 	return (
// 		<div>
// 			<h1>Hello</h1>
// 			<div>{date.toLocaleTimeString()}</div>
// 		</div>
// 	);
// }
