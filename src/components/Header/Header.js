import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Header.css"

const Header = () => {
  return (
    <Container className='header'>
        <Row>
            <Col>
                <img src='' alt="Pircture" className='body-text'/>
            </Col>
            <Col>
                <Row>
                    John Smith
                </Row>
                <Row className='body-text'>
                    jsmith@gmail.com
                </Row>
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
  )
}

export default Header