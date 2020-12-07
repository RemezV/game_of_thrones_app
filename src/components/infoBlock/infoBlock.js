import React from 'react'
import {Col, Row} from 'reactstrap'

const InfoBlock = ({leftRow, rightRow}) => {
    return(
        <>
            <Row>
                <Col md='6'>
                    {leftRow}
                </Col>
                <Col md='6'>
                    {rightRow}
                </Col>
            </Row>            
        </>
    )
}

export default InfoBlock