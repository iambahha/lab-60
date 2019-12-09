import React, {Component} from 'react';
import Container from "reactstrap/es/Container";
import InputForm from "../components/InputForm/InputForm";
import Messages from "../components/Messages/Messages";

const messagesUrl = 'http://146.185.154.90:8000/messages';
const getMessagesByDate = 'http://146.185.154.90:8000/messages?datetime=';

class Chat extends Component {

    state = {
        author: '',
        message: '',
        messages: []
    };

    shouldComponentUpdate= (nextProps, nextState) => {
        return nextState.messages.length !== this.state.messages.length ||
            nextState.author !== this.state.author ||
            nextState.message !== this.state.message;
    };

    getAllMessages = (lastDate) => {
        let url = lastDate ? getMessagesByDate + lastDate : messagesUrl;

        return fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error');
            }).then(newMessages => {
                this.setState({messages: [...this.state.messages].concat(newMessages)});
            }).catch(error => {
                console.log(error);
            });
    };

    getNewMessages = (lastDate) => {
        this.intervalId = setInterval(() => {
            this.getAllMessages(lastDate).then()
        }, 2000);
    };

    componentDidMount() {
        this.getAllMessages().then();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const lastDate = this.state.messages[this.state.messages.length - 1].datetime;
        clearInterval(this.intervalId);
        this.getNewMessages(lastDate);

        if (prevState.messages.length !== this.state.messages.length) {
            window.scroll(0, window.document.body.offsetHeight);
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    changeAuthor = event => {
        this.setState({author: event.target.value});
    };

    changeMessage = (event) => {
        this.setState({message: event.target.value});
    };

    sendClickHandler = () => {
        if (this.state.author !== '' && this.state.message !== '') {

            const data = new URLSearchParams();

            data.set('author', this.state.author);
            data.set('message', this.state.message);

            return fetch(messagesUrl, {
                method: 'post',
                body: data,
            }).then(this.setState({
                author: '',
                message: ''
            })).catch(error => {
                console.log(error);
            });

        } else {
            alert('Please fill all fields!');
        }
    };

    render() {
        return (
            <Container>
                <Messages messages={this.state.messages}/>
                <InputForm
                    author={this.state.author}
                    message={this.state.message}
                    changeAuthor={(event) => this.changeAuthor(event)}
                    changeMessage={(event) => this.changeMessage(event)}
                    sendMessage={this.sendClickHandler}
                />
            </Container>
        );
    }
}

export default Chat;
