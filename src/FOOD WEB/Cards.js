import './Cards.css';

const Cards=()=>{
    return(
        <>
           <div className="cards">
           <div className="card1">
               <img src="https://source.unsplash.com/random/1920x1080/?frenchfries" alt="" height="250px" width="300px"/>
               <h3 id='text1'>Cheese burger</h3>
               <h5 id='text2'>Buy one get 1</h5>
               <button className="btn btn-success" id='chase'>$30</button>
               </div>

               <div className="card2">
               <img src="https://source.unsplash.com/random/1920x1080/?sandwitch" alt="" height="250px" width="300px"/>
               <h3 id='text1'>Cheese burger</h3>
               <h5 id='text2'>Buy 5 get 2</h5>
               <button className="btn btn-success" id='chase'>$30</button>
               </div>

               <div className="card3">
               <img src="https://source.unsplash.com/random/1920x1080/?pizza" alt="" height="250px" width="300px"/>
               <h3 id='text1'>Hot pizza offer</h3>
               <h5 id='text2'>Buy two get 1</h5>
               <button className="btn btn-success" id='chase'>$30</button>
               
           </div>
           </div>
           
        </>
    )
}



export default Cards;