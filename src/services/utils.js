import axios from "axios";

export const setTokenHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export const apiCall = async (method, path, data) => {
  try {
      // let res = await axios[method.toLowerCase()](path, data);
      let res;
      let formData = new FormData();
      if(method.toLowerCase() === "post"){
        for (const [key, value] of Object.entries(data)) {
          formData.append( key , value);
        }
        res = await axios({
            method : method,
            url : path,
            mode : "cors",
            data : formData,
            header : {
              "Content-type" : "application/json",
            },
        });
        
      }else{
          res = await axios({
            method : method,
            url : path,
            mode : "cors",
            data : formData,
            header : {
              "Content-type" : "application/json",
            },
        });
      }
    
      return res.data;
  }catch(err){
      return err.response.data.error;
  }
}


export const apiUploadCall = async (method, path, data) => {
    let formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      formData.append( key , value);
    }
  
    try{
        // This is for File Upload requests
        let res = await axios.post(path , formData , {
            mode : "cors",
            headers : {
              'Content-type' : 'multipart/form-data'
            }
        });
        return res.data;
    }catch(err){
      return err.response.data.error;
    }
}