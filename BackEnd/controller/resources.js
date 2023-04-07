const resources = require("../db/models/resources.js");

const newResource = async (request, response) => {
  const { currentYear, AY, branch, degree, subjects } = request.body;

  if (!currentYear || !AY || !branch || !degree || !subjects) {
    response.status(400).json("Fill fields properly!");
    return;
  }

  /*
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
    */
  try {
    let resource = await resources.findOne({ currentYear, AY, branch, degree });

    // If the resource does not exist, create a new one
    if (!resource) {
      resource = new resources({
        currentYear,
        AY,
        branch,
        degree,
        subjects,
      });
    }
    // If the resource exists, add the new subjects to its subjects array
    else {
      subjects.forEach((newSubject) => {
        // Check if the subject already exists
        const existingSubject = resource.subjects.find(
          (subject) => subject.sub_name === newSubject.sub_name
        );
        if (existingSubject) {
          // If the subject exists, add the new sources to its sources array
          newSubject.sources.forEach((newSource) => {
            existingSubject.sources.push(newSource);
          });
        } else {
          // If the subject does not exist, add it to the subjects array
          resource.subjects.push(newSubject);
        }
      });
    }

    // Save the resource to the database
    await resource.save();

    response.status(200).send({ message: "Resource created successfully" });
  } catch (err) {
    console.error(err);
    response.status(500).send({ message: "Internal server error" });
  }
};

const updateResource = async (request, response) => {
  try {
    const data = request.body._id;
    const answer = await resources.findByIdAndUpdate(
      { _id: data, "subjects._id": data.subjects._id },
      {
        $set: {
          "subjects.$.sub_name": data.subjects.sub_name,
          "subjects.$.sources": data.subjects.sources,
        },
      },
      { new: true }
    );

    if (!answer)
      return response.status(404).json({ error: `No resource found` });
    return response.status(200).json({ answer });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Something went wrong" });
  }
};

async function deleteResource(req, res) {
  const { AY, year, branch, degree, sub_name, content } = req.body;

  try {
    const resource = await resources.findOneAndUpdate(
      {
        AY,
        degree,
        branch,
        currentYear: year,
        "subjects.sub_name": sub_name,
        "subjects.sources.title": content,
      },
      {
        $pull: {
          "subjects.$[].sources": { title: content },
        },
      },
      { new: true }
    );

    if (!resource) {
      return res.status(404).json({ error: "Resource not found" });
    }

    return res.status(200).json({ message: "Resource deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

const getResource = async (request, response) => {
  // const { AY ,degree , branch , currentYear } = request.body;
  try {
    const result = await resources.findOne(request.query);
    if (result) response.status(200).json(result);
    else {
      response.status(400).json({ error: "resources not found" });
    }
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = { newResource, updateResource, getResource, deleteResource };
