import { useState, useEffect, useRef } from 'react';
import '../styles/index.css';
import { Footer, IconsFooter, ImgFooter, Launching, Numeros, LetrasNum, ContadorGen} from "../styles/BackgroundStyled";
import {Container} from 'react-bootstrap';

const hil = "https://res.cloudinary.com/docutv7ug/image/upload/v1650484023/Countdown/pattern-hills_y8emrs.svg";

function CountdownTimer() {
 const [days, setDays]= useState("00");
 const [hours, setHours]= useState("00");
 const [minutes, setMinutes]= useState("00");
 const [seconds, setSeconds]= useState("00");

 let interval = useRef()
 const start = ()=>{

    const countdown = new Date("Apr 27, 2022 00:00:00").getTime();

    interval = setInterval (()=>{
        const nowDate = new Date().getTime();
        const diference = countdown - nowDate;

        const days2 = Math.floor(diference / (1000 * 60 * 60 * 24));
        const hours2 = Math.floor(diference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes2 = Math.floor(diference % (1000 * 60 * 60) / (1000 * 60));
        const seconds2 = Math.floor(diference % (1000 * 60) / (1000));

        if (diference < 0){
          //Detiene el Tiempo
          clearInterval(interval.current);
        }else{
          //Actualiza el cronometro
          setDays(days2);
          setHours(hours2);
          setMinutes(minutes2);
          setSeconds(seconds2);
        }

    }, 1000)
} 

  useEffect(()=>{
    start();
    return()=>{
        clearInterval(interval.current);
    };
  })

  return (
    <> 
    <div className="App">
      <Container> 
        <Launching>W E ' R E  L A U N C H I N G  S O O N</Launching>
          <ContadorGen className="row contador">
            <div>
              <Numeros className="col">{days}</Numeros>
              <LetrasNum className="col">D A Y S</LetrasNum>
            </div>
            <div>
              <Numeros className="col numeros">{hours} </Numeros>
              <LetrasNum className="col">H O U R S</LetrasNum>
            </div>
            <div>
              <Numeros className="col numeros">{minutes} </Numeros>
              <LetrasNum className="col">M I N U T E S</LetrasNum>
            </div>
            <div>
              <Numeros className="col numeros">{seconds} </Numeros>
              <LetrasNum className="col">S E C O N D S</LetrasNum>
            </div>
          </ContadorGen>            
        
        <Footer>
          <IconsFooter>
            <a href ="https://www.facebook.com/" target="_blank" ><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1650484023/Countdown/icon-facebook_u6e6qi.svg" alt="icono Facebok" className='iconos' /> </a>
            <a href ="https://co.pinterest.com/" target="_blank" ><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1650484022/Countdown/icon-pinterest_ikeukc.svg" alt="icono Pinterest" className='iconos'/> </a>
            <a href ="https://www.instagram.com/" target="_blank" ><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1650484023/Countdown/icon-instagram_uvzvmu.svg" alt="icono Instagram" className='iconos'/> </a>
          </IconsFooter>
          <ImgFooter src={hil} alt="hill"/>
        </Footer>
      </Container>
    </div>
  </>
  );
}




export default CountdownTimer;
