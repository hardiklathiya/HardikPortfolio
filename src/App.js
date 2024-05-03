import Header from '../src/components/header/Header'
import About from '../src/components/about/About'
import Experience from '../src/components/experience/Experience'
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Contact from './components/contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import { useState } from 'react';
import Chat from './components/chat/Chat';
import BottomUpButton from './components/uparrow/BottomUpButton';
// import Loader from './components/loader/Loader';

function App() {
  // const [loader, setLoader] = useState(true)
  const [mode, setMode] = useState('dark')
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor="white"
      document.body.style.transition="1s"
      document.body.style.transformOrigin="top"

    }
    else if(mode==="light"){
      setMode('dark')
      document.body.style.backgroundColor="#141432"
      document.body.style.transition="1s"
      document.body.style.transformOrigin="top"

    }
  }
  // let loading=document.getElementById("loader");
 
  // if(loading){
  //   setTimeout(() => {
  //     loading.style.display="none";
  //     setLoader(false)
  //   },loader);
  // }
  
  return (
    <>
     {/* {loader?<Loader/>: */}
      <>
    <Header toggleMode={toggleMode} mode={mode}/>
    <Chat/>
     <Nav mode={mode}/>
    <About mode={mode}/>
    <Experience mode={mode}/>
    <Services mode={mode}/>
    <Portfolio mode={mode}/>
    <Contact mode={mode}/>
    <Footer mode={mode}/>
    <BottomUpButton mode={mode}/></>
    {/* } */}
    </>
  );
}

export default App;
