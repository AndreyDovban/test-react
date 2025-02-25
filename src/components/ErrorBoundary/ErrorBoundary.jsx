import { Component } from 'react';

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		// Обновить состояние с тем, чтобы следующий рендер показал запасной UI.

		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
		// logErrorToMyService(error, errorInfo);
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			// Можно отрендерить запасной UI произвольного вида
			return (
				<>
					<h1>Что-то пошло не так.</h1>
					<h4>{this.state.errorMessage}</h4>
				</>
			);
		}

		return this.props.children;
	}
}
