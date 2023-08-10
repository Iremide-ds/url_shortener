export const dbName = process.env.DB || '';
export const dbUser = process.env.DBUSER || '';
export const dbPass = process.env.DBPASSWORD || '';
export const dbPort = parseInt(process.env.DBPORT) || 3306;
export const dbHost = process.env.DBHOST || '';
export const jwtKey = process.env.SECRET || 'notrealllyasecret..';
