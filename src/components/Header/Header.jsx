import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { messi } from '../importImage'
import "./header.css"


function Header({title, desc, image}) {
  return (
       <div className='header-container'>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col sm={12} md={7} xl={7}>
                        <div className='d-flex justify-content-left align-items-center h-100 w-100'>
                            <div className="header_info">
                                <h2 className='header_info_title'>{title}</h2>
                                <p>{desc}</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={5} xl={5}>
                        <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                            <div className='header_img_area'>
                                <img className='header_image' src={image} alt="playerImage"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
       </div>
      )
}

export default Header