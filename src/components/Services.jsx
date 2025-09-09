import React from 'react'
import "./styles/services.css";

const Services=(props)=>{
    const items=props.items;
  return (
    <div className='services-container' onMouseEnter={(e)=>props.fun(true)} onMouseLeave={(e)=>props.fun(false)}>
        {
            items.map((each,index)=>{
                return (
                    <div key={index} className='divs'>
                        <section><h1>{each.title}</h1></section>
                        <section>
                            <section style={{width:"160px"}}>{each.description}</section>
                            <section><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.159 10.72a.75.75 0 1 0 1.06 1.06l3.25-3.25L15 8l-.53-.53l-3.25-3.25a.75.75 0 0 0-1.061 1.06l1.97 1.97H1.75a.75.75 0 1 0 0 1.5h10.379z" clip-rule="evenodd"/></svg></section>
                        </section>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Services;