const resources = require('../db/models/resources.js');

const newResource = async (request, response) => {
    const { currentYear, AY , branch, degree , subjects } = req.body; 

    if(!currentYear || !AY || !branch || !degree || !subjects){
        response.status(400).json('Fill fields properly!');
        return;
    }
    const new_resource =  new resources({
        currentYear : currentYear ,
        AY : AY ,
        branch : branch ,
        degree : degree ,
        subjects : subjects 
    });
    try {
        const savedresource = await new_resource.save();
        response.status(200).json({message : 'Resource saved successfully.'});
    } catch (error) {
        response.status(500).json(error);
    }
}

const updateResource = async(req,res)=>{
    try {
        const data = req.body._id;
        const answer = await resources.findByIdAndUpdate({_id : data });
    
        if(!answer)
            return res.status(404).json({ error: `No record found` });
        return res.status(200).json({ answer });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}

const getResource = async (request, response) => {
    const { AY ,degree , branch , currentYear } = req.body;
    try {
        const result = await resources.findOne({AY : AY , degree : degree , branch : branch , currentYear : currentYear});
        if(result)
            response.status(200).json(result);
        else{
            response.status(400).json({error: "resources not found"});
        }
    } catch (error) {
        response.status(500).json(error);
    }
}

module.exports = { newResource , updateResource , getResource}