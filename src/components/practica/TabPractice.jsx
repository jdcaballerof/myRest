import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import { Img } from './Img';

function LinkTab(props) {
    return (
      <Tab
        component='a'
        // onClick={(event) => {
        //   event.preventDefault();
        // }}
        {...props}
      />
    );
  }

export const TabPractice = () => {

    const [panel, setPanel] = useState(0);

    //^ Funcion del watcher
    const setNav = (elementos, observador) => {

      elementos.map( (e) => {
        if(e.isIntersecting){
          // console.log('In', e.target.id, parseInt(e.target.id.slice(-1)));
          setPanel( parseInt(e.target.id.slice(-1))-1 )

          // setPanel(parseInt(e.target.id.slice(-1)))
        } else {
          // console.log('Out', e.target.id)
        }

      } )

    }

    //^ Watcher
    const observador = new IntersectionObserver( setNav, {
      root: null,
      rootMargin: '250px 0px -550px 0px',
    } )


    //^ Watcher observer(esteElement)
    useEffect(() => {
        observador.observe(t1)
        observador.observe(t2)
        observador.observe(t3)
        observador.observe(t4)
        observador.observe(t5)
        observador.observe(t6)
        observador.observe(t7)
        observador.observe(t8)
      
    }, [])
    

    function a11yProps(index) {
      return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
        
      };
    }


    const getCoords = () => {
      setPanel(1)
    }


  return (
    <div>

        <a href="#t1" >
          <Button variant="contained"  onClick={getCoords} sx={{zIndex: 999, position: 'fixed', bottom: 15, right: 15, borderRadius: 20}}> Up </Button>
        </a> 

        <Tabs
        value={panel}
        onChange={(ev, newValue) => setPanel(newValue)}
        textColor="secondary" indicatorColor="secondary"
        variant="scrollable" scrollButtons="auto"
        aria-label="secondary tabs example"
        className='sticky top-0 z-10	 bg-white'
        >
            <LinkTab label="Page 1" href="#t1" {...a11yProps(0)} />
            <LinkTab label="Page 2" href="#t2" {...a11yProps(1)} />
            <LinkTab label="Page 3" href="#t3" {...a11yProps(2)} />
            <LinkTab label="Page 4" href="#t4" {...a11yProps(3)} />
            <LinkTab label="Page 5" href="#t5" {...a11yProps(4)} />
            <LinkTab label="Page 6" href="#t6" {...a11yProps(5)} />
            <LinkTab label="Page 7" href="#t7" {...a11yProps(6)} />
            <LinkTab label="Page 8" href="#t8" {...a11yProps(7)} />

        </Tabs>

        <div id='t1' className='h-10 bg-slate-400 opacity-0	 ' />
        <h2  className='sticky top-12 bg-white' >Titulo 1</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, eius in possimus asperiores dolore beatae consequuntur officiis reiciendis odio vitae, suscipit dolor unde! Ipsa ea atque recusandae fuga reiciendis nobis.</p>
        <img src="https://mui.com/static/branding/store-templates/template-dark5.jpeg" width="800" height="682" />

        <div id='t2' className='h-10 bg-slate-400 opacity-0	' />
        <h2 className='sticky top-12 bg-white' >Titulo 2</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, eius in possimus asperiores dolore beatae consequuntur officiis reiciendis odio vitae, suscipit dolor unde! Ipsa ea atque recusandae fuga reiciendis nobis.</p>
        <img src='https://mui.com/static/branding/store-templates/template-dark5.jpeg' width="800" height="682" />
        
        <div id='t3' className='h-10' />
        <h2 className='sticky top-12 bg-white' >Titulo 3</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, eius in possimus asperiores dolore beatae consequuntur officiis reiciendis odio vitae, suscipit dolor unde! Ipsa ea atque recusandae fuga reiciendis nobis.</p>
        <img src="http://www.pasajero7.com/wp-content/uploads/2017/09/RTP.jpg" width="800" height="682"></img>
        
        <div id='t4' className='h-10' />
        <h2 className='sticky top-12 bg-white' >Titulo 4</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, eius in possimus asperiores dolore beatae consequuntur officiis reiciendis odio vitae, suscipit dolor unde! Ipsa ea atque recusandae fuga reiciendis nobis.</p>
        <img src="https://www.rtp.cdmx.gob.mx/storage/app/uploads/public/615/4f3/66c/thumb_2104_640_360_0_0_crop.png" width="800" height="682"></img>
        
        <div id='t5' className='h-10' />
        <h2 className='sticky top-12 bg-white' >Titulo 5</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, eius in possimus asperiores dolore beatae consequuntur officiis reiciendis odio vitae, suscipit dolor unde! Ipsa ea atque recusandae fuga reiciendis nobis.</p>
        <img src="https://www.dondeir.com/wp-content/uploads/2022/01/servicio-de-rtp-cobrara-4-pesos-te-decimos-que-lineas.jpg" width="800" height="682"></img>

        <div id='t6' className='h-10' />
        <h2 className='sticky top-12 bg-white' >Titulo 6</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, eius in possimus asperiores dolore beatae consequuntur officiis reiciendis odio vitae, suscipit dolor unde! Ipsa ea atque recusandae fuga reiciendis nobis.</p>
        <img src="https://mui.com/static/branding/store-templates/template-dark5.jpeg" width="800" height="682"></img>

        <div id='t7' className='h-10' onLoadCapture={() => console.log('Cargo t7')} />
        <h2 className='sticky top-12 bg-white' >Titulo 7</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, eius in possimus asperiores dolore beatae consequuntur officiis reiciendis odio vitae, suscipit dolor unde! Ipsa ea atque recusandae fuga reiciendis nobis.</p>
        <img src="https://mui.com/static/branding/store-templates/template-dark5.jpeg" width="800" height="682"></img>

        <div id='t8' className='h-10' />
        <h2 className='sticky top-12 bg-white' >Titulo 8</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, eius in possimus asperiores dolore beatae consequuntur officiis reiciendis odio vitae, suscipit dolor unde! Ipsa ea atque recusandae fuga reiciendis nobis.</p>
        <img src='https://mui.com/static/branding/store-templates/template-dark5.jpeg' width="800" height="682" />

        <div className='h-60 mt-20 bg-slate-500 opacity-20' />
    </div>
  )
}
