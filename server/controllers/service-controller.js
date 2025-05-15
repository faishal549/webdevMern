const Service = require("../models/service-model")
const service =async(req, res)=>{
   try {
    const response = await Service.find()

    return res.status(200).json({response})
    
   } catch (error) {

    return res.status(500).json({msg:"internal server error"})
    
   }
}


module.exports = service;