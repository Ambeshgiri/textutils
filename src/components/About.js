// import React,{useInsertionEffect, useState} from 'react'
import React from 'react'


export default function About(props) {
    // const [myStyle,setMyStyle]= useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle={
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',
        // border:'2px solid white'
    }
  return (
        <div  className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze to your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div className="accordion-body" style={myStyle}>
                          Analyze to your text in this website. This website is very use in daily use and mutli button .
                          Analyze to your text in this website. This website is very use in daily use and mutli button .Analyze to your text in this website. This website is very use in daily use and mutli button .
                      </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                       <div className="accordion-body" style={myStyle}>
                          Analyze to your text in this website. This website is very use in daily use and mutli button .Analyze to your text in this website. This website is very use in daily use and mutli button .
                          Analyze to your text in this website. This website is very use in daily use and mutli button .
                       </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                          Analyze to your text in this website. This website is very use in daily use and mutli button .Analyze to your text in this website. This website is very use in daily use and mutli button .
                          Analyze to your text in this website. This website is very use in daily use and mutli button .Analyze to your text in this website. This website is very use in daily use and mutli button .
                       </div>
                    </div>
                </div>
            </div>
        </div>
   )
}
