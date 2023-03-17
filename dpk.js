const crypto = require("crypto");

// Generate hash from the given data
const generateHashFromData = (event) => {
  // Convert data into string and generate a SHA3-512 hash using the crypto module
  const data = JSON.stringify(event);
  return String(crypto.createHash("sha3-512").update(data).digest("hex"));
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  // Return trivial partition key if event does not exist
  if (!event) {
    return TRIVIAL_PARTITION_KEY
  }

  // If partition key is undefined, generate a deterministic partition key 
  if (event && event.partitionKey === undefined) {
    return generateHashFromData(event);
  }

  // Use the partition key provided or generate a deterministic partition key
  const candidate = event.partitionKey ? String(event.partitionKey) : generateHashFromData(event);
  
  // If the candidate's length is longer than maximum partition key length,
  // generate a SHA3-512 hash of the candidate.
  return candidate.length > MAX_PARTITION_KEY_LENGTH ? crypto.createHash("sha3-512").update(candidate).digest("hex") : candidate;
};

