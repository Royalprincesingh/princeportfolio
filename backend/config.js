const requiredEnvVars = [
  'EMAIL_USER',
  'EMAIL_PASSWORD',
  'NODE_ENV'
];

const checkEnvVariables = () => {
  const missingVars = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missingVars.length > 0) {
    console.error('Error: Missing required environment variables:');
    missingVars.forEach(envVar => {
      console.error(`- ${envVar}`);
    });
    process.exit(1);
  }
};

module.exports = { checkEnvVariables };