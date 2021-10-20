import { Form } from 'react-bootstrap'

const Contact = () => {
    return (
        <div>
            <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Feedback pips!</Form.Label>
          <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <button className="btn-lg cbtn">Submit</button>
        </Form>
        </div>
    );
}

export default Contact
