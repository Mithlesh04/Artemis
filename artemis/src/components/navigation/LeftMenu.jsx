import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import { DashCircleDotted , ChevronDown } from 'react-bootstrap-icons';

const Menu = {
    Main : {
      isRenderKey : true, //default true
      data : [
        {
            logo : <DashCircleDotted />,
            text : "Dashboard",
            isActive : true,
        },
        {
            logo : <DashCircleDotted />,
            text : "Discover"
        },
        {
            logo : <DashCircleDotted />,
            text : "Users"
        },
        {
            logo : <DashCircleDotted />,
            text : "Documents"
        },
        {
            logo : <DashCircleDotted />,
            text : "Application"
        },
        {
            logo : <DashCircleDotted />,
            text : "Pages"
        },
      ]
    },

    SECONDARY : {
        data : [
          {
              logo : <DashCircleDotted />,
              text : "Support Center",
          },
          {
              logo : <DashCircleDotted />,
              text : "Inbox"
          },
          {
              logo : <DashCircleDotted />,
              text : "File Manager"
          },
          {
              logo : <DashCircleDotted />,
              text : "Data List"
          }
        ]
      },

}


function CreateMenu({ data }){
   const res = []
    for(let k in data){
        let v = data[k] 

        let i = 0
        for(let d of (v.data || [])){
            res.push(
                <React.Fragment key={Math.random() + k}>
                    {!i ? <div className="text-secondary mb-2">{k}</div> : ''}
                    <Row style={{backgroundColor : d.isActive? '#372ada' : 'none', cursor : 'pointer'}} className={`text-${d.isActive ? 'light' : 'dark'} p-1 pt-2 pb-2 m-0 justify-content-center rounded`}>
                        <Col sm={1} className="p-0 m-0 ml-1">{d.logo || ''}</Col>
                        <Col sm={8} className="p-0 m-0 ml-2">{d.text || ''}</Col>
                        <Col sm={2} className="p-0 m-0 text-right"><ChevronDown /></Col>
                    </Row>
              </React.Fragment>
            )
            ++i
        }
        res.push(
           <div key={Math.random() + k} className="mt-3"></div>
        )

    }
return res
}


export function LeftMenu(){
    return (
     <Container className="position-fixed h-100 " style={{ boxShadow : 'rgb(41 41 41 / 25%) 0px 0px 6px 0px' , backgroundColor : '#fefefe', paddingTop:70 ,width:270 , top : 0 , left : 0 }} >
          
          <CreateMenu data={Menu} />

     </Container>

    )

}