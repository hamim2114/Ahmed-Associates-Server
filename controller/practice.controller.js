import practiceModel from "../models/practice.model .js";

export const createPractice = async (req,res,next) => {
  try {
    const newPractice =  new practiceModel(req.body)
    const savedPractice = await newPractice.save();
    res.status(201).send(savedPractice)
  } catch (error) {
    next(error)
  }
};

export const updatePractice = async (req,res,next) => {
  try {
    const updatedPractice = await practiceModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true});
    res.status(201).send(updatedPractice)
  } catch (error) {
    next(error)
  }
}

export const getPractice = async (req,res,next) => {
  try {
    const practiceData = await practiceModel.find();
    res.status(201).send(practiceData);
  } catch (error) {
    next(error)
  }
};

export const getSinglePractice = async (req,res,next) => {
  try {
    const practiceSingleData = await practiceModel.findById(req.params.id);
    res.status(201).send(practiceSingleData);
  } catch (error) {
    next(error)
  }
};