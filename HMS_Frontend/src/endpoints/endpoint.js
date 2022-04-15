import axios from 'axios'
export const Queries_Data = async() =>{
    const message = { data: 'send room queries data'}
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    let queries_Data = {}
    await axios.post("http://localhost:5000/guards/roomQueries", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const G_Close_Query = async(message) =>{
    console.log('working')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    let queries_Data = {}
    await axios.post("http://localhost:5000/guards/closeRoomQueries", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const G_Retrive_Del = async() =>{
    console.log('RD')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    let message = { 'data': 'semd delivery status' }
    let queries_Data = {}
    await axios.post("http://localhost:5000/guards/showDeliver", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const G_Del_Status = async(message) =>{
    console.log('Status')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    let queries_Data = {}
    await axios.post("http://localhost:5000/guards/deliveryStatus", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const G_Add_Del = async(message) =>{
    console.log('Add Del')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    let queries_Data = {}
    await axios.post("http://localhost:5000/guards/addDeliver", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const G_Get_Cln_Det = async() =>{
    console.log('Add Del')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };

    let message = { "data": "Send all cleaning requests" }

    let queries_Data = {}
    await axios.post("http://localhost:5000/guards/cleaningRequest", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const get_Spt_Eqp_Det = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };

    console.log("working")
    let queries_Data = {}
    await axios.post("http://localhost:5000/guards/showSportEquip", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const Accept_Spt_Eqp = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    console.log("working")
    let queries_Data = {}
    await axios.post("http://localhost:5000/guards/acceptSportReq", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const Close_Spt_Eqp = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    console.log("working")
    let queries_Data = {}
    await axios.post("http://localhost:5000/guards/returnedSportEquip", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const g_change_Pass = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    console.log("working")
    let queries_Data = {}
    await axios.post("http://localhost:5000/guards/changePassword", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const get_User_Cred = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    let queries_Data = {}
    await axios.post("http://localhost:5000/login", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const send_Cln_Req = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    let queries_Data = {}
    await axios.post("http://localhost:5000/student/cleaningRequests", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const send_Other_Req = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    let queries_Data = {}
    await axios.post("http://localhost:5000/student/otherRequests", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const send_Sports_Req = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    let queries_Data = {}
    await axios.post("http://localhost:5000/student/sportRequest", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const get_St_Det = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    let id = localStorage.getItem('id') 
    let queries_Data = {}
    await axios.post("http://localhost:5000/student/:"+{id}, message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const change_Pass = async(message) =>{
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content_Type': 'application/json',
        }
      };
      let queries_Data = {}
      console.log(message)
      await axios.post("http://localhost:5000/student/changePassword", message, config)
          .then(response => {
              queries_Data = response.data
          })
          
          .catch(error => {
              console.log(error)
          });
          return queries_Data;
}

// WARDEN

export const retrive_St = async() =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };

    let message = { 
        'data': 'send the list of all hostel students',
    }
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/warden/showStudent", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const add_St = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };

    // let message = { 
    //     'name': 'st1',
    //     'phNo': 1231231231231,
    //     'rollNo': 190000,
    //     'address': 'st1Add',
    //     'password': 'st1',
    //     'branch': 'CSE',
    //     'passingYear': 2023,
    //     'roomNo': 300, 
    //     'email': 'st1@gmail.com',
    // }
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/warden/addStudent", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const del_St = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };

    // let message = { 
    //     'queryId': '623f187ec4f099e168b61940',
    // }
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/warden/deleteStudent", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const edit_St = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    console.log(message)
    let queries_Data = {}
    await axios.post("http://localhost:5000/warden/editStudent", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const w_change_Pass = async(message) =>{
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content_Type': 'application/json',
        }
      };
      let queries_Data = {}
      console.log(message)
      await axios.post("http://localhost:5000/warden/changePassword", message, config)
          .then(response => {
              queries_Data = response.data
          })
          
          .catch(error => {
              console.log(error)
          });
          return queries_Data;
}

// Dashboard

export const retrive_Notifications = async() =>{
    console.log('in retrive')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };

    let message = { 
       'data': 'send notifications'
    }
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/notify/showNotification", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const add_Notifications = async(message) =>{
    console.log('in retrive')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/notify/addNotification", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const delete_Notifications = async(message) =>{
    console.log('in delete')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/notify/deleteNotification", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

//Caretaker

export const retrive_G_Emp = async() =>{
    console.log('Gmemp')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };

    let message = { 
        'data': 'send the list of all hostel guards and employee',
    }
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/caretaker/showGuard", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const add_G_Emp = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/caretaker/addGuard", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const edit_G_Emp = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/caretaker/editGuard", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const delete_G_Emp = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/caretaker/deleteGuard", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const add_Emp = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/caretaker/addEmployee", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const edit_Emp = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/caretaker/editEmployee", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const retrive_Emp = async() =>{
    console.log('Gmemp')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };

    let message = { 
        'data': 'send the list of all hostel guards and employee',
    }
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/caretaker/showEmployee", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const delete_Emp = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/caretaker/deleteEmployee", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const c_change_Pass = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/caretaker/changePassword", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

// Cleaning Staff

export const retrive_Cln_Req = async(message) =>{
    console.log('Cln')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/cleaningService/showTask", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const retrive_Accepted_Req = async(message) =>{
    console.log('Accepted Cln')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    console.log(message)
    let queries_Data = {}
    await axios.post("http://localhost:5000/cleaningService/showAccTask", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const accept_Cln_Req = async(message) =>{
    console.log('Accept')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/cleaningService/completed", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const done_Cln_Req = async(message) =>{
    console.log('Accept')
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/cleaningService/doneAccTask", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}

export const e_change_Pass = async(message) =>{
    const config = {
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Content_Type': 'application/json',
      }
    };
    
    let queries_Data = {}
    await axios.post("http://localhost:5000/cleaningService/changePassword", message, config)
        .then(response => {
            queries_Data = response.data
        })
        
        .catch(error => {
            console.log(error)
        });
        return queries_Data;
}
