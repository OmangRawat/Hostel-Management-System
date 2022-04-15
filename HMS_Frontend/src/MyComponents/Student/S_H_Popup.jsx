import React from 'react'
import '../../css/Student/S_H_Popup.css'

export const S_H_Popup = ({childToParent}) => {
    const [stQuery, setStQuery ] = React.useState("");
    // const data = "checked"

  return (
      
        <div id="myModal" className="modal">
            <div className="modal-content">
                {/* <span className="close">&times;</span> */}
                <div className="container">
                    <div className="title">
                        Hostel Issue
                    </div>
                    <div className="content">
                        {/* <form>  */}
                            <div className="user-details">
                                <div className="input-box">
                                    {/* <input type="text" placeholder="Enter Query" name = "price" /> */}
                                    {/* <textarea type="text" placeholder="Enter Query" name = "price" ></textarea> */}
                                    <textarea name="" id="" cols="115" rows="10" className="abc" placeholder="Enter Query"  value={stQuery} onChange={(e) => setStQuery(e.target.value)}></textarea>
                                </div>            
                            </div>           
                            <div className="button">
                                <input name = "Cleaning request" value="Submit"  onClick={() => childToParent(stQuery)} />     
                            </div>            
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>   
        
    )

}
