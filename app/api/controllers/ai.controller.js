// app/api/controllers/ai.controller.js
const aiService = require('../services/ai.service');

module.exports.getReview = async (req) => {
  const { code } = req.body;

  if (!code) {
    throw new Error('Code is required');
  }

  const response = await aiService(code);
  return response;
};