
import allowedOrigins from "./AlowedOrigin.js";


const corsOptions = {
    origin: (origin, callback) => {
      // if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      // } else {
      //   console.log("Not allowed by CORS", origin);
      //   callback(new Error('Not allowed by CORS'));
      // }
    },
    optionsSuccessStatus: 200,
  };

export default  corsOptions;

