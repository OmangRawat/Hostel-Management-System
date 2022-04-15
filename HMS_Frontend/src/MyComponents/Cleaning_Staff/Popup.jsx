import React from 'react'
import "../../css/Cleaning_Staff/Popup.css"

export const CS_Popup = () => {
  return (
    <div className='cs_popup_container'>
        <div className="popup">
            <h1 className="text1">
                {/* Student abc Room Query */}
                STUDENT ABC ROOM QUERY
            </h1>
            <p className="st_room_query">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum.
            </p>
            <button className="st_query_status">
                <h1>CLOSE REQUEST</h1>
            </button>
        </div>
    </div>
  )
}
