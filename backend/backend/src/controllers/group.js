const GroupModel = require('../models/group')
const GroupUtils = require('./utils/group')

const info = (req,res) => {
  let groupname = req.params.groupname
  return GroupUtils.info(groupname,res)
}

const createGroup = (req,res) => {

  let title = req.body.groupname
  let descriptions = req.body.descriptions
  let creator = req.userId
  if(!title || !descriptions) return res.status(400).json({
    "error": "Missing title, descriptions or both"
  })
  return GroupUtils.createGroup(title,descriptions,creator,res)
}

module.exports = {
  info,
  createGroup
}
