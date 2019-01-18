import React, { Component } from 'react';
import {Menu, Icon, Modal, Form, Input, Button, ModalActions} from 'semantic-ui-react';

 class Channels extends Component {

    state={
        channels: [],
        channelName: '',
        channelDetails: '',
        modal: false
    }

handleChange = event => {

    this.setState({[event.target.name]: event.target.value})

}; 

handleSubmit = event => {
    event.preventDefault(); 
    if(this.isFormValid(this.state)) {
        console.log('channel added');
    }
}

isFormValid =({channelName, channelDetails }) => channelName && channelDetails;


openModal = () => this.setState({modal: true});
closeModal = () => this.setState({modal: false});

  render() {

    const {channels, modal} = this.state;

    return (
        <React.Fragment>
      <Menu.Menu style={{paddingBottom: '2em'}}>
      <Menu.Item>
        <span>
            <Icon name= "exchange"/> CHANNELS
        </span> {" "}
        ({channels.length }) <Icon name="add" onClick={this.openModal} />
      </Menu.Item>
        {/*Channels */ }
      </Menu.Menu>

      <Modal basic open={modal} onClose={this.closeModal}> 
        <Modal.Header> Add a Channel </Modal.Header>
        <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                   <Input 
                   fluid 
                   label="Name of Channel"
                   name="channelName"
                   onChange= {this.handleChange}
                   />
                </Form.Field>

                <Form.Field>
                   <Input 
                   fluid 
                   label="About the Channel"
                   name="channelDetails"
                   onChange= {this.handleChange}
                   />
                </Form.Field>
            </Form>
        </Modal.Content>
        <ModalActions>
            <Button color="green" inverted onClick={this.handleSubmit}>
            <Icon name="checkmark" /> Add 
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
            <Icon name="remove" /> Cancel 
            </Button>

        </ModalActions>
      </Modal>
      </React.Fragment>
    )
  }
}

export default Channels
