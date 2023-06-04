import inquirer from "inquirer";
import { save, get } from "./readWritePromises.js";
import { promptGastos } from "./promptGastos.js";

const run = async () => {
  const gasto = await promptGastos();

  const gastoJson = await get("./gastos.json");

  const nuevoGasto = [...gastoJson, gasto];

  save("./gastos.json", nuevoGasto);
};

run();
