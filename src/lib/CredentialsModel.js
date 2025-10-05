const {default: mongoose } = require('mongoose');

const CredentialsModel = new mongoose.Schema({
  qaEmail: String,
  qaName: String,
  agentEmail: String,
  agentName: String,
  auditDate: Date,
  agentID: String,
  tlEmail: String,
  tlName: String,
  market: String,
  accountNumber: String,
  coordNumber: String,
  slNumber: String,
  newZone: String,
  typeOfRequest: String,
  campaign: String,
  process: String,
  qaComment: String,
  password: String,      // we hash on server before saving
  zmConsent: Boolean
}, { timestamps: true });

// module.exports = mongoose.model('Audit', AuditSchema);

export const restaurantSchema= mongoose.models.Credentials
|| mongoose.model('Credentials', CredentialsModel);