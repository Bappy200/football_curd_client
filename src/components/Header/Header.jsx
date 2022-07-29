import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { messi } from '../importImage'
import "./header.css"

function Header() {
  return (
       <div className='header-container'>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col sm={12} md={8} xl={8}>
                        <div className='d-flex justify-content-left align-items-center h-100 w-100'>
                            <div className="header_info">
                                <h2 className='header_info_title'>Football World</h2>
                                <p>Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4} xl={4}>
                        <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                            <div className='header_img_area'>
                                <img className='header_image' src={messi} alt="playerImage"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
       </div>
      )
}

export default Header