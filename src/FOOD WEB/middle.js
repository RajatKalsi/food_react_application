import './middle.css';
import {useSelector,useDispatch} from 'react-redux';
import {increment,Decrement} from "../actions/increment";


let Middle=()=>{
    let mystate=useSelector((state)=>state.Reducer);
    const dispatch=useDispatch();
    return(
        <>
            <div className="middle">
                <div className="middle1">
                 <div className="item">
                   <h1>The best and healthy food</h1>
                
                  <h2>Owner:Pulkit Aggarwal </h2>
                    <p>free Home delivery </p>
                    </div>

                    
                    <div className="foodanimate">
                    <p className='animate'>This is online food deliver website</p>
                    <div className="fooditem">
                    
                      <div className="itembutton">
                       <div className="item1"><img src="https://source.unsplash.com/random/250×250/?chinese food" alt=""  height="80px" width="80px"/></div>

                       <button className="btn btn-success" id="itemwithbutton1"  onClick={()=>dispatch(increment())}>$20</button>
                       </div> 

                       <div className="itembutton">
                        <div className="item2"><img src="https://source.unsplash.com/random/250×250/?food delivery" alt=""  height="80px" width="80px"/></div>
                        <button className="btn btn-danger" id="itemwithbutton2" onClick={()=>dispatch(Decrement())}>$30</button>
                        
                        </div>
                        <div className="itembutton">
                        <div className="item3"><img src="https://source.unsplash.com/random/250×250/?pizza" alt=""  height="80px" width="80px"/>
                        </div>
                        <button className="btn btn-success" id="itemwithbutton3"   onClick={()=>dispatch(increment())}>$20</button>
                        </div>
                        <div className="itembutton">
                        <div className="item4"><img src="https://source.unsplash.com/random/250×250/?burger" alt=""  height="80px" width="80px"/>
                        </div>
                        <button className="btn btn-danger" id="itemwithbutton4" onClick={()=>dispatch(Decrement())}>$30</button> 
                        
                        
                        </div>
                        </div>
                    </div>
                </div>
                <div className="middle2">
                   
                    <img src="https://source.unsplash.com/random/300×622/?pizza" height="320px" width="624px"></img>
                    
                    
                </div>
            </div>
        </>
    )
}

export default Middle;