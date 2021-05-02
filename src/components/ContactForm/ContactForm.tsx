import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import ContactFormStyles from "./ContactForm.module.scss"

export default class ContactForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      }


      handleInputChange = (event: { target: any }) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }

      handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        var request = new XMLHttpRequest();
        request.open("POST", "https://discord.com/api/webhooks/838119371683266560/lS6wI0IUwT16DEuIrRQrhaCDlD_oZwAtOXfkxNqLr4q2C8D7t5jOexuaYX5SY3UeXT6k");
        request.setRequestHeader('Content-type', 'application/json');


        var messageEmbed = {
            author: {
              name: "Portfolio"
            },
            title: "You have a new message!  :envelope_with_arrow: ",
            description: `**First name:** ${this.state.firstName} \n**Last name:** ${this.state.lastName} \n**Email:** ${this.state.email} \n**Message:** ${this.state.message}`,
            color: 16711680
          }

        var params = {
            username: "Portfolio Helper",
            embeds: [ messageEmbed ]
          }
        request.send(JSON.stringify(params));
        this.setState({ firstName: '' })
        this.setState({ lastName: '' })
        this.setState({ email: '' })
        this.setState({ message: '' })
        alert("Message sent!")
      }

    

    render(){
        return(
            <section className={ContactFormStyles.ContactFormContainer}>
                <Container className={ContactFormStyles.TitleContainer}>
                    <div className={ContactFormStyles.TitleTextContainer}>
                        <div className={ContactFormStyles.Title}>Hey, thanks for showing interest, you're awesome!</div>
                        <div className={ContactFormStyles.Subtitle}>Simply fill out this form and I'll be able to answer you ASAP!</div>
                    </div>
                </Container>
                <Form onSubmit={this.handleSubmit}>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className={ContactFormStyles.TextInputLabel}>First Name</Form.Label>
                                    <Form.Control 
                                        name="firstName" 
                                        className={ContactFormStyles.TextInput} 
                                        placeholder="John" 
                                        required 
                                        size="lg"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange} 
                                        type="text"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label className={ContactFormStyles.TextInputLabel}>Last Name</Form.Label>
                                    <Form.Control 
                                        name="lastName" 
                                        className={ContactFormStyles.TextInput} 
                                        placeholder="Doe" 
                                        required 
                                        size="lg" 
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange} 
                                        type="text"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className={ContactFormStyles.TextInputLabel}>Your email</Form.Label>
                                    <Form.Control 
                                        name="email" 
                                        className={ContactFormStyles.TextInput} 
                                        placeholder="johndoe@gmail.com" 
                                        required 
                                        size="lg" 
                                        value={this.state.email}
                                        onChange={this.handleInputChange} 
                                        type="email"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label className={ContactFormStyles.TextInputLabel}>Any message you want to send me!</Form.Label>
                                    <Form.Control 
                                        name="message" 
                                        as="textarea" 
                                        rows={3} 
                                        className={ContactFormStyles.TextInput} 
                                        placeholder="You're awesome!" 
                                        required 
                                        size="lg" 
                                        value={this.state.message}
                                        onChange={this.handleInputChange} 
                                        type="text"/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{textAlign: 'center'}}>
                        <Button className={ContactFormStyles.SubmitButton} type="submit" onClick={() =>  window.location.href='/'}>Send it!</Button>
                    </Container>
                </Form>
            </section>
        )
    }

    
}

