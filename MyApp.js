import React from "react"

function MyApp(){
    const date = new Date()
    const hours = date.getHours()
    let time

    if (time >= 6 && time <= 10 ){
        time = "morning"
    } else if (time > 10 && time <= 17 ){
        time = "afternoon"
    }else {
        time = "night"
    }

  return(
    <main>
    <h1>Hello, <span>World!</span></h1>
    <p>Hey, I would Like to reccomend you something awesome 
    to learn new framework <span>in this {time}</span></p> 
    </main>
  )
}

export default MyApp;