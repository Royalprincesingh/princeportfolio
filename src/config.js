// Configuration for environment variables
const config = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/contact',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

export default config;