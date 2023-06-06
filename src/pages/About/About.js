import React from 'react'
import RoundButton from '../../compornent/RoundButton/RoundButton'

import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function About({PopUpMsg}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <h1>About</h1>
        <RoundButton name={"Click Me About"}/>

        <Button variant="primary" onClick={(handleShow)}>
        Launch demo modal
        </Button>

        
    </div>
  )
}
