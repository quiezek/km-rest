import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

import { employees } from "./employees";
import apiHanlders from "./functions/apiHandlers"

const app = express();
const { PORT = 3000 } = process.env;
app.use(express.json()).use(cors());


app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => res.send("⚔⚔⚔ Kobayashi Maru ⚔⚔⚔ "));

app.get("/employees", (req, res) => {
  const { department } = req.query;
  
  const result = apiHanlders.handleGetEmployees(department);

  res.status(200).json(result);
});

app.get("/employees/:employee_id", (req, res) => {
    try{

      const { employee_id } = req.params;
    
      const result = apiHanlders.handleGetSpecificEmployee(employee_id);
      if(!result){
        res.status(404).send("Employee not found");
      }
      res.status(200).json(result);
    } catch (e){
      res.status(404).send(e);
    }
  });

app.listen(PORT, () =>
  console.log(`😎😎😎 I'm listening on port ${PORT}! 😎😎😎`)
);



