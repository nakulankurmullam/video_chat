import React,{useState} from "react";
import "./VidCall.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function VidCall() {
  const [audio,setAudio] = useState(false);
  const isSmall = screen.width<=400?'small':'large'
  return (
    <Container>
      <Row>
        <video className={isSmall} autoPlay id="remote" alt="remote"></video>
      </Row>
      <Row>
        <video className={isSmall} autoPlay id="local" alt="local"></video>
      </Row>
      <Row className="controlpanel">
          <button onClick={()=>setAudio(!audio)} className='controls btn-secondary'>Mic</button>
          <button className='controls btn-danger'>End</button>
          <button className='controls btn-secondary'>Vid</button>
      </Row>
      <Row>
        <Button>Next</Button>
      </Row>
    </Container>
  );
}

export default VidCall;
