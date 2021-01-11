import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../assets/css/styles.css';
import hero from '../assets/img/hero.jpg';
import { GetDistanceBetweenAreaCodes, GetTimeString, GetRestDays } from '../logic/calculator';
import { AreaCodeLookup } from '../logic/us-area-code-geo';

interface State {
    showIntroButton: boolean,
    showForm: boolean,
    showConfirmation: boolean,
    destinationNumber: string,
    message: string,
}

class Hero extends Component<{}, State> {
    constructor({}) {
        super({});
        this.state = {
            showIntroButton: true,
            showForm: false,
            showConfirmation: false,
            destinationNumber: '',
            message: '',
        }
    }

    render() {
        return (
            <section className="hero">
                <div className="background-image" style={{backgroundImage: `url(${hero})`}}></div>
                <h1>Fly</h1>
                <h3>Text at the speed of bird</h3>
                {this._renderIntroButton()}
                {this._renderMessageForm()}
                {this._renderConfirmation()}
            </section>
        )
    }

    _renderIntroButton = () => {
        if (!this.state.showIntroButton) {
            return null;
        }
        return (
            <Button variant="primary" onClick={this._handleIntroButton}>Send</Button>
        )
    }

    _renderMessageForm = () => {
        if (!this.state.showForm) {
            return null;
        }
        return (
            <Form>
                <Form.Group controlId="formMessage">
                    <Form.Label>{"Message"}</Form.Label>
                    <div style={{padding: "10px"}}>
                        <input className="input-text" type="text" value={this.state.message} onChange={this._handleMessageChange} placeholder={'On the wings of a dove'} />
                    </div>
                </Form.Group>
                <Form.Group controlId="formDestinationPhone">
                    <Form.Label>{"Destination phone number"}</Form.Label>
                    <div style={{padding: "10px"}}>
                        <Form.Control className="input-text" type="phone" value={this.state.destinationNumber} onChange={this._handleNumberChange} placeholder={'555-123-4567'} />
                    </div>
                </Form.Group>
                <div style={{padding: "10px"}}>
                    <Button variant="primary" onClick={this._handleMessageSubmit}>{'Fly, little bird!'}</Button>{''}
                </div>
          </Form>
        )
    } 

    _renderConfirmation = () => {
        if (!this.state.showConfirmation) {
            return null
        }
        const originAreaCode = '510';
        const destinationAreaCode = this.state.destinationNumber.slice(0, 3);
        const distance = GetDistanceBetweenAreaCodes(originAreaCode, destinationAreaCode, true);
        const timeString = GetTimeString(distance);
        const restDays = GetRestDays(distance);
        return (
            <div style={{display: this.state.showConfirmation ? "block" : "none"}}>
                <div style={{padding: "10px", fontWeight: "bolder"}} >
                    {'Bird dispatched!'}
                </div>
                <div style={{padding: "10px", fontWeight: "bolder"}} >
                    {`Your message will take ${timeString} to travel ${distance} miles.`}
                </div>
                <div style={{display: restDays > 0 ? "block" : "none", padding: "10px", fontWeight: "bolder"}} >
                    {`This includes ${restDays} nights of rest.`}
                </div>
                <div style={{padding: "10px"}}>
                    <Button variant="primary" onClick={this._clearAll}>{"Thank you, pigeon"}</Button>
                </div>
            </div>
        )
    }

    _toggleForm = () => {
        this.setState((state) => {return {showForm: !state.showForm}})
    }

    _toggleConfirmation = () => {
        this.setState({showConfirmation: true})
    }

    _handleIntroButton = () => {
        this._toggleForm();
        this.setState({showIntroButton: false})
    }

    _handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({message: event.target.value});
    }

    _handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({destinationNumber: event.target.value});
    }  

    _handleMessageSubmit = () => {
        const areaCode = this.state.destinationNumber.slice(0, 3);
        if (AreaCodeLookup(areaCode).length === 0) {
            alert('That is not a valid area code, try again')
            return;
        }
        this._toggleForm()
        this._toggleConfirmation()
    }

    _clearAll= () => {
        this.setState({showIntroButton: true, showForm: false, showConfirmation: false, message: '', destinationNumber: ''})
    }


}

export default Hero;