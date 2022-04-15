import React from 'react'
import '../../css/Student/S_H_Sports_popup.css'

export const S_H_Sports_Popup = ({childToParent_2}) => {
    const [eqp, setEqp ] = React.useState("Badminton");
    const [qty, setQty ] = React.useState();
    
    
    // const data = "checked"

  return (
      
        <div id="myModal" className="modal">
            <div className="modal-content">
                {/* <span className="close">&times;</span> */}
                <div className="container">
                    <div className="title">
                        Sports Equipment
                    </div>
                    <div className="content">
                        {/* <form>  */}
                            <div className="user-details">
                                <div className="input-box sports">
                                    {/* <input type="text" placeholder="Enter Query" name = "price" /> */}
                                    {/* <textarea type="text" placeholder="Enter Query" name = "price" ></textarea> */}
                                    <div>
                                        <select onChange={(e) => setEqp(e.target.value)} required>
                                            <option value="Badminton">Badminton</option>
                                            <option value="Football">Football</option>
                                            <option value="Cricket Kit">Cricket Kit</option>
                                            <option value="Table Tennis Bat">Table Tennis Bat</option>
                                            <option value="Table Tennis Ball">Table Tennis Ball</option>
                                            <option value="Chess">Chess</option>
                                            <option value="Carrom Coins">Carrom Coins</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type='number' placeholder='Enter Quantity' onChange={(e) => setQty(e.target.value)} required/>
                                    </div>
                                </div>            
                            </div>           
                            <div className="button">
                                <input name = "Cleaning request" value="Submit"  onClick={() => childToParent_2(eqp, qty)} />     
                            </div>            
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>   
        
    )

}
