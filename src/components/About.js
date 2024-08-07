//import React, { useState } from 'react'
import React from "react"
export default function About(props) {

let myStyle = {
  color : props.mode==="dark"?"white":"grey",
  backgroundColor : props.mode==="dark"?"#464647":"white"
}

  return (
    <div className = "container" style = {myStyle}>
    <h2 className = "my-3">About Us</h2>
    <div className="accordion" id="accordionExample" >
    <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
    </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body" style = {myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. 
    </div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Free to use
    </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body" style = {myStyle}>
       TextUtils is a free character counter tool that provides insstant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
    </div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Browser Compatible
    </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body" style = {myStyle}>
       This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document,essays, etc.
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}