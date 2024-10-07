import React, { useState } from 'react'

export default function AboutUs (props) {

    const [mode, setmode] = useState(
        {
            color:'black',
            backgroundColor: 'white'
        }
    )
    const [modebtn, setmodebtn] = useState('Dark Mode')

    function LightDarkMode(){
        if(mode.color == 'black'){
            setmode({
                color : 'white',
                backgroundColor: '#222222'
            })
            setmodebtn('Light Mode')        
        }
        else{
            setmode({
                color : '#181818',
                backgroundColor: 'white'
            })
            setmodebtn('Dark Mode')        
        }
    } 


  return (
    <>
    <div className='container'>
      <div className="accordion accordion-flush " id="accordionFlushExample" >
  <div className="accordion-item">
    <h2 className="accordion-header ">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" style={mode} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" style={mode} data-bs-parent="#accordionFlushExample">
      <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" style={mode} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" style={mode} data-bs-parent="#accordionFlushExample">
      <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" style={mode} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" style={mode} data-bs-parent="#accordionFlushExample">
      <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
