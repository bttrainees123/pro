export  const response =async (res,error)=>{
     if(error.status === 401 && error.message ==="Unauthorized" ){
        const status = false ;
         const message = "Unautharized";
         res.status(status).json({message})

         return;
     }
}