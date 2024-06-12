import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/error.css'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <section class="page_404">
	<Container>
		<Row>
		<Col xs={12}>
		<div class="m-auto text-center" style={{'width':"80%"}}>
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		<Link to='/' className='link_404'> Go to Home</Link> 
	</div>
		</div>
		</Col>
		 </Row>
    </Container>
</section>
  )
}
