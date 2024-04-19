const express =require("express") ;

const config =require("./shared/config/index.js") ;
const apiRouter =require("./apis/index.js") ;
const db =require("./db/index.js") ;

const app = express();
app.use(express.json());
app.use(apiRouter);

db.sync({ alter: true, logging: false })
  .then(() => {
    console.log("Connected to DB successfully");
    app.listen(config.port, config.hostname, () => {
      console.log(`server running on http://${config.hostname}:${config.port}`);
    });
  })
  .catch((err) => {
    console.log("DB connection failed due to:", err);
  });
