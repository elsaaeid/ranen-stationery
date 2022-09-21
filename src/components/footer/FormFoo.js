import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function FormFoo() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      />
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      <Button style={{color: "white", marginTop: "1rem"}} variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormFoo;