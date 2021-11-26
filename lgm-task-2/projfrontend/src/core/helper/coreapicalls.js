export const getAllProduct = () =>{
    return fetch (`https://reqres.in/api/users`,{
    method:"GET"
    })
   .then(res=>{
       console.log("res",res);
       return res.json();
    })
    .catch(err=>console.log("Error",err));
}

export const loadToPage = () =>{
    if(typeof window !== undefined){
        if(localStorage.getItem("/")){
            return JSON.parse(localStorage.getItem("/"));
        }
    }
}

