import React from 'react'
import '../../css/Student/S_Popup.css'

export const S_Popup = ({childToParent}) => {
    const [stQuery, setStQuery ] = React.useState("");
    // const data = "checked"

  return (
      
    <div className='s_popup_container'>
        <div className="popup">
            <h1 className="text1">
                STUDENT ABC ROOM QUERY
            </h1>
            <p className="st_room_query">
                <textarea name="student query" id="" cols="80" rows="10" value={stQuery} onChange={(e) => setStQuery(e.target.value)}>
                    
                </textarea>
            </p>
            <button className="st_query_status" onClick={() => childToParent(stQuery)}>
                <h1>SEND REQUEST</h1>
            </button>
        </div>
    </div>
  )
}
