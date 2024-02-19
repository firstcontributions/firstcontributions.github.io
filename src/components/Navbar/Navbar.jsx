import React ,{useState}from 'react';
import './Navbar.css';
import slack from './slack.svg';
import youtube from './youtube.svg';
import twitter  from './twitter.svg';
import github from './github.svg';

const Navbar = () => {
    const [show,setShow]=useState(false);
    let showClass
    let mainShow
    if(show){
         showClass="topnav show"
         mainShow="main"
    }else{
         showClass="topnav"
         mainShow=""
    }
  return (
      <div style={{textAlign:"left"}} className={mainShow}>
      <button  className="btn"
      onClick={()=>setShow(!show)}
      >
        <div style={{display:"flex",flexDirection:"column",fontSize:"20px",rowGap:"2px",fontWeight:"bolder",lineHeight:"12px",width:"40px",padding:"4px",zIndex:"10",color:"white"}}>
        <span >---</span>
        <span>---</span>
        <span>---</span></div>
       </button>   
     <div className={showClass} >
    
          <a href="https://join.slack.com/t/firstcontributors/shared_invite/zt-1n4y7xnk0-DnLVTaN6U9xLU79H5Hi62w"  target="_blank" rel="noopener noreferrer">
              <img src={slack} className="logo" alt="slack logo" />
              <span>Slack</span>
          </a>
          <a href="https://www.youtube.com/channel/UCMXNFxCvyH5LhUwEcmY8qGQ" target="_blank" rel="noopener noreferrer">
              <img  src={youtube} className="logo" alt="youtube logo" />
              <span className='title'>Youtube</span>    
          </a>
          <a href="https://twitter.com/1stContribution" target="_blank" rel="noopener noreferrer">
              <img   src={twitter} className="logo" alt="twitter logo" />
              <span className='title'>Twitter</span>
          </a>
          <a href="https://github.com/firstcontributions/first-contributions" target="_blank" rel="noopener noreferrer">
              <img  src={github} className="logo" alt="github logo" />
              <span className='title'>GitHub</span>
          </a>
      </div></div>
  );
};

export default Navbar;
