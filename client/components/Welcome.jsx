import React from 'react'

// import React-Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Welcome () {
  return (
    <div className="chat">

      <Container>
        <Row>
          <Col>
            <h1>Welcome to the worlds oldest activity</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>If someone has a different viewpoint, why not run towards it, see it as a valuable chance to learn, it&#39;s gym for your brain.</p>

            <p>Instead of arguing over a topic, don&#39;t try to win, try to learn as much as you can.</p>

            <p>Changing your mind is something to be proud of, as is understanding someone else&#39;s POV with greater resolution.</p>

            <p>Genuinely seeking to understand someones view isn&#39;t dignifying it, nor endorsing it, it&#39;s a key part of growth. Tolerating them is a key part of society, not vacillation or weakness. </p>

            <p>Feel free to agree or ignore or debate</p></Col>
        </Row>
        <Row>
          <Col><h1>Sign in or Register!</h1></Col>
        </Row>
      </Container>

    </div>
  )
}
