import React, { useState } from 'react'


import './test_board.css'

//Size images
import sixteenButton from '../../images/16-inch-btn.png'
import eighteenButton from '../../images/18-inch-btn.png'
import twentyButton from '../../images/20-inch-btn.png'
import twentyFourButton from '../../images/24-inch-btn.png'

//Chain color images
import metalRingGM from '../../images/metal-ring-GM.png'
import metalRingAG from '../../images/metal-ring-AG.png'
import metalRingS from '../../images/metal-ring-S.png'
import metalRingAS from '../../images/metal-ring-AS.png'
import metalRingG from '../../images/metal-ring-G.png'

//Mannequin images
import originalMannequin from '../../images/original mannequin (1).jpg'
import fairMannequin from '../../images/manqs/Fair.png'
import tanMannequin from '../../images/manqs/tan.png'
import darkMannequin from '../../images/manqs/warm-deep.png'

//Mannequin color images
import lightSkin from '../../images/skin_color_lite.png'
import tanSkin from '../../images/skin_color_tan.png'
import darkSkin from '../../images/skin_color_dark.png'

//Chain images
import silverChain from '../../images/chains/baseChain20_S.png'
import goldChain from '../../images/chains/baseChain20_G.png'
import brownChain from '../../images/chains/baseChain20_AG.png'
import greyChain from '../../images/chains/baseChain20_AS.png'
import blackChain from '../../images/chains/baseChain20_GM.png'

//beads 
import beads from '../../images/beads/beads.js'

export default function TestBoard () {

   const [chain , setChain] = useState(goldChain)

   const [mannequin, setMannequin] = useState(originalMannequin)

   let anchors = [
    <img src={beads[0].image} alt={'bead'} className='anchor'/>,
    null,
    null,
    null,
    null,
    null,
    null]

   const [anchorsState, setAnchorsState] = useState([])

   const changeBead = (bead, index) => {
        console.log(bead)
        console.log(index) 
        anchors[index] = bead
        setAnchorsState(anchors)
        console.log(anchorsState)
    }

   const changeChain = (chain) => {
       console.log(chain)
       setChain(chain)
   }

   const changeMannequin = (image) => {
       console.log(image)
       setMannequin(image)
   }

   return(
       <div>
           <div className="main">
               <div className="selection-fields">
                   <div className='top-bottom'>
                       <h1>Select a chain length</h1>
                       <div className="txt-box">
                           <img src={sixteenButton} className='selectable' alt="Number"/>
                           <img src={eighteenButton} className='selectable' alt="Number"/>
                           <img src={twentyButton} className='selectable' alt="Number"/>
                           <img src={twentyFourButton} className='selectable' alt="Number"/>
                       </div>
                   </div>
                       <div className='top-bottom'>
                           <h1>Select your metal color</h1>
                           <div className="ring-box">
                               <img src={metalRingGM} className='selectable' onClick={()=>{changeChain(goldChain)}} alt="ring"/>
                               <img src={metalRingAG} className='selectable' onClick={()=>{changeChain(brownChain)}} alt="ring"/>
                               <img src={metalRingS} className='selectable' onClick={()=>{changeChain(silverChain)}} alt="ring"/>
                               <img src={metalRingAS} className='selectable' onClick={()=>{changeChain(greyChain)}}alt="ring"/>
                               <img src={metalRingG} className='selectable' onClick={()=>{changeChain(blackChain)}} alt="ring"/>
                           </div>
                       </div>
                       <div className='top-bottom'>
                           <h1>Select a skin color</h1>
                           <div className="circle-box">
                               <img src={lightSkin} className='selectable' alt="circle" onClick={()=>{changeMannequin(fairMannequin)}}/>
                               <img src={tanSkin} className='selectable' alt="circle" onClick={()=>{changeMannequin(tanMannequin)}}/>
                               <img src={darkSkin} className='selectable' alt="circle" onClick={()=>{changeMannequin(darkMannequin)}}/>
                           </div>
                       </div>
               </div>
               <div className="line"></div>
               <div className="design-board">
                   <div className="left">
                    {beads.map((bead, index) => {
                        return <img src={bead.image} key={index} className='bead' alt="Jewelry"/>
                    })}
                   </div>
                   <div className="middle">
                        {anchorsState.map((anchor, index) => {
                            return <div key={index} className='bead' alt="Jewelry"></div>
                        })}
                         <img src={mannequin} id='mannequin' className='img' alt="Jewelry"/>
                         <img src={chain}  id="chain" className='img' alt="chain"/>
                   </div>
                   <div className="right">

                   </div>
               </div>
               </div>
       </div>
   )
}

