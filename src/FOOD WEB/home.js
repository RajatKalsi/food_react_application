import React from 'react'

export const Home = () => {
  return (
    <div>
    <h1>This is a home page</h1>
    <div className="card1">
               <img src="https://source.unsplash.com/random/1920x1080/?frenchfries" alt="" height="250px" width="300px"/>
               <h3>Cheese burger</h3>
               <h5>Buy one get 1</h5>
               <button className="btn btn-success" id='chase'>$30</button>
               </div>
     </div>
  )
}
export default Home;
