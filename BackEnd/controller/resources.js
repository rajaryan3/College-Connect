const post = require('../db/models/resources.js');

const newResource = async (request, response) => {
    const { currentYear, AY , branch, degree , subjects } = req.body; 

    if(!currentYear || !AY || !branch || !degree || !subjects){
        response.status(400).json('Fill fields properly!');
        return;
    }
    const new_resource = {
        currentYear : currentYear ,
        AY : AY ,
        branch : branch ,
        degree : degree ,
        subjects : subjects 
    };
    try {
        const savedresource = await new_resource.save();
        response.status(200).json({message : 'Resource saved successfully.'});
    } catch (error) {
        response.status(500).json(error);
    }
}

const updateResource = async(req,res)=>{
    try {
        const data = req.body.data;
        console.log(data._id , data)
        answer = await Restaurant.findByIdAndUpdate({_id : data._id , 'menu._id' : data.cat_id} ,
            {$push : { menu : { category : data.category , c_items : data.c_items }}} , {new : true , upsert : false});
    
        if(!answer)
            return res.status(404).json({ error: `No record found with id : ${data._id}` });

        return res.status(200).json({ answer });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Something went wrong" });

    }
}


module.exports = { newPost  }
