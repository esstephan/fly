import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorInfo: ''
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true, error: info})
    }

    render() {
        if (this.state.hasError) {
            return <h3>"Bird is lost, try again later"</h3>
        }
    }
}