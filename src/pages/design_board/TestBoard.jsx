import React, { useState } from 'react'

import './test_board.css'

import sixteenButton from '../../images/16-inch-btn.png'
import eighteenButton from '../../images/18-inch-btn.png'
import twentyButton from '../../images/20-inch-btn.png'
import twentyFourButton from '../../images/24-inch-btn.png'

import lightSkin from '../../images/skin_color_lite.png'
import tanSkin from '../../images/skin_color_tan.png'
import darkSkin from '../../images/skin_color_dark.png'

import metalRingGM from '../../images/metal-ring-GM.png'
import metalRingAG from '../../images/metal-ring-AG.png'
import metalRingS from '../../images/metal-ring-S.png'
import metalRingAS from '../../images/metal-ring-AS.png'
import metalRingG from '../../images/metal-ring-G.png'

import originalMannequin from '../../images/original mannequin (1).jpg'

import chain from '../../images/chain.png'

export default function TestBoard () {

    const [mannequin, setMannequin] = useState(originalMannequin)

    const changeMannequin = (e) => {
        console.log(e.target.src)
        setMannequin(e.target.src)
    }

    // const externalHtml = 

    return(
        <div>
            <div class="main">
                <div class="text">
                    <h3>Length<span style={{margin: "-4px 8px 0 1px;"}}>.</span> coming soon</h3>
                    <h3>Select your metal color</h3>
                    <h3>Skin colors<span style={{margin: "-4px 8px 0 1px;"}}>.</span> coming soon</h3>
                </div>
                <div class="line"></div>
                <div class="ring-circle-box">
                    <div class="txt-box">
                        <img src={sixteenButton} alt="Number"/>
                        <img src={eighteenButton} alt="Number"/>
                        <img src={twentyButton} alt="Number"/>
                        <img src={twentyFourButton} alt="Number"/>
                    </div>
                    <div class="ring-box">
                        <img src={metalRingGM} alt="ring"/>
                        <img src={metalRingAG} alt="ring"/>
                        <img src={metalRingS} alt="ring"/>
                        <img src={metalRingAS} alt="ring"/>
                        <img src={metalRingG} alt="ring"/>
                    </div>
                    <div class="circle-box">
                        <img src={lightSkin} alt="circle" onClick={changeMannequin}/>
                        <img src={tanSkin} alt="circle" onClick={changeMannequin}/>
                        <img src={darkSkin} alt="circle" onClick={changeMannequin}/>
                    </div>
                </div>
                <div class="body-center">
                    <div class="left">
                        <div class="lft-img">
                            
                        </div>
                    </div>
                    <div class="middle">
                        <img src={mannequin} alt="Jewelry"/>
                        <div id="chainContainer"><img id="chain" src={chain} alt="chain"/> </div>
                    </div>
                    <div class="right">
                        <div class="rgt-img">
                            
                        </div>
                    </div>
                </div>
                </div>
                {/* <div class="mobile">
                <div class="mring-circle-box">
                    <div class="txt-box-cont">
                        <h3>Length<span style={{margin: "-4px 8px 0 1px;"}}>.</span> coming soon</h3>
                        <div class="line"></div>
                        <div class="txt-box">
                            <img src={sixteenButton} alt="Number"/>
                            <img src={eighteenButton}alt="Number"/>
                            <img src="../../images/20-inch-btn.png" alt="Number"/>
                            <img src="../../images/24-inch-btn.png" alt="Number"/>
                        </div>
                    </div>
                    <div class="ring-box-cont">
                        <h3>Select your metal cuiul</h3>
                        <div class="line"></div>
                        <div class="ring-box">
                            <img src="../../images/metal-ring-GM.png" alt="ring"/>
                            <img src="../../images/metal-ring-AG.png" alt="ring"/>
                            <img src="../../images/metal-ring-S.png" alt="ring"/>
                            <img src="../../images/metal-ring-AS.png" alt="ring"/>
                            <img src="../../images/metal-ring-G.png" alt="ring"/>
                        </div>
                    </div>
                    <div class="circle-box-cont">
                        <h3>Skin colors<span style={{margin: "-4px 8px 0 1px;"}}>.</span> coming soon</h3>
                        <div class="line"></div>
                        <div class="circle-box">
                            <img src="../../images/skin_color_lite.png" alt="circle"/>
                            <img src="../../images/skin_color_tan.png" alt="circle"/>
                            <img src="../../images/skin_color_dark.png" alt="circle"/>
                        </div>
                    </div>
                </div>
                <div class="mmiddle">
                    <img src="../../images/original mannequin (1).jpg" alt="Jewelry"/>
                    <div id="chainContainer"><img id="chain" src="../../images/chain.png" alt="chain"/></div>
                </div>
                <div class="body-center">
                    <div class="left">
                    </div>
                    <div class="right">
                    </div>
                </div>
            </div> */}
        </div>
    )
}