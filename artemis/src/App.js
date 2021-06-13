import React from 'react';
import './App.css';
import { Navigation } from "./../src/components/navigation/"
import { GreenCard  } from "./components/body/components"
import { Container , Row , Col , ProgressBar , Button , Table } from 'react-bootstrap';
import { ThreeDots , ArrowBarUp , ChevronUp , ChevronDown } from 'react-bootstrap-icons';

import { RBarChart , RAreaChart } from "./components/body/Charts"


function Chevron(){
  return <span style={{fontSize : 10}}>
        <ChevronUp style={{ marginTop : -10 }} />
        <ChevronDown style={{marginLeft : -10 , marginTop : 3}}/>
    </span>
}

function CrTable(){
  return <Table size="sm">
  <thead>
    <tr style={{color : "rgb(156 156 156)"}}>
      <td><input type="checkbox" className="mr-1"/> Invoice <Chevron /></td>
      <td>Date <Chevron /></td>
      <td>Description <Chevron /></td>
      <td>Status <Chevron /></td>
      <td>Description <Chevron /></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <input type="checkbox" className="mr-1"/> MKO012356SDF4</td>
      <td>JUL 6, 2021</td>
      <td>Code Passed536sdf</td>
      <td><GreenCard text="Completed" /></td>
      <td>$250000000000</td>
    </tr>
    <tr>
      <td> <input type="checkbox" className="mr-1"/> MKO012356SDF4</td>
      <td>JUL 6, 2021</td>
      <td>Code Passed536sdf</td>
      <td><GreenCard text="Completed" /></td>
      <td>$250000000000</td>
    </tr>
    <tr>
      <td> <input type="checkbox" className="mr-1"/> MKO012356SDF4</td>
      <td>JUL 6, 2021</td>
      <td>Code Passed536sdf</td>
      <td><GreenCard text="Completed" /></td>
      <td>$250000000000</td>
    </tr>
    <tr>
      <td> <input type="checkbox" className="mr-1"/> MKO012356SDF4</td>
      <td>JUL 6, 2021</td>
      <td>Code Passed536sdf</td>
      <td><GreenCard text="Completed" /></td>
      <td>$250000000000</td>
    </tr>
  </tbody>
</Table>
}





function App() {
  let props={
      style : {
         backgroundColor : 'white'
      },
      className : 'rounded'
  }
  return (
      <React.Fragment>
        <Navigation />
    
        <Container className="text-center" style={{marginTop : 80 , marginLeft : 300 , width : window.innerWidth - 330}}>


          <Row>

              <Col className="mr-5 ml-3 text-left">
                  <Row className="mb-3">
                      <Col {...props} >
                          <Row style={{color:"#ccc"}} className="py-2">
                              <Col className="text-left"><small>Total Income</small></Col>
                              <Col className="text-right"><small><ThreeDots /></small></Col>
                          </Row>
                          <div className="pb-2" style={{fontSize : 20 , fontWeight : 700 , lineHeight : 1 }}>$124,563.00 <small><GreenCard text="+2.5%" /> </small></div>
                          <ProgressBar now={60} variant="#8026dd" style={{height:3}} />
                          <div className="pb-3 text-secondary"><small>Yearly Gold</small></div>
                      </Col>
                  </Row>

                  <Row>
                     <Col {...props}>
                          <Row style={{color:"#ccc"}} className="py-2 pb-0">
                              <Col className="text-left"><small>New User</small></Col>
                              <Col className="text-right"><small><ThreeDots /></small></Col>
                          </Row>
                          <div className="pb-2" style={{fontSize : 20 , fontWeight : 700 , lineHeight : .5 }}>94.2% <small><GreenCard text="+6.5%" /> </small></div>
                          <Row className="p-2 pt-3 text-center justify-content-center">
                            <RBarChart />
                          </Row>
                          
                    </Col>
                  </Row>
              </Col>

              <Col sm={6} {...props}>

                    <Row className="py-2 pb-3 border border-top-0 border-left-0 border-right-0">
                        <Col className="align-self-center text-left" style={{fontWeight:700}}>Balance</Col>
                        <Col className="align-self-center text-right">
                            <select className="rounded p-1" style={{border : '1px solid #ccc' , color : '#ccc' , fontSize : 12}}>
                                <option>Monthly</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className="pt-2 text-left pb-3">
                       <Col>
                          <div className="py-2 pl-3 border rounded">
                            <div><small>Earnings</small></div>
                            <div style={{fontWeight : 700 , fontSize : 20}}>43.41% <small><GreenCard text="+2.5%" /> </small></div>
                          </div>
                       </Col>
                       <Col>
                          <div className="py-2 pl-3 border rounded">
                            <div><small>Sales Value</small></div>
                            <div style={{fontWeight : 700 , fontSize : 20}}>$95,422 <small><GreenCard text="+13.5%" /> </small></div>
                          </div>
                       </Col>
                    </Row>

                  <Row>
                    <RAreaChart />
                  </Row>

              </Col>

          </Row>

          

          <div className="text-left py-3 px-3 mt-5  " style={{background : 'white'}}>
              <Row>
                  <Col className="align-self-center" style={{fontWeight : 700}}>Recent Transactions</Col>   
                  <Col className="text-right align-self-center"><Button sm={4}><ArrowBarUp /> Export</Button></Col>
              </Row>
             
              <Row className="border border-top-0 border-right-0 border-left-0 mt-2 mb-2">
                  <Col sm={1} className="ml-3 pb-1 text-center" style={{ cursor : 'pointer' , fontSize : 13, color : 'blue' ,borderBottom : '2px solid blue'}}>Incoming</Col>
                  <Col sm={1} className="ml-3 pb-1 text-center" style={{ cursor : 'pointer' , fontSize : 13}}>Invoices</Col>
              </Row>
             <CrTable />
          </div>



        </Container>


      </React.Fragment>
  )
  
  
}

export default App;
