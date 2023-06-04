import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "gasto",
    message: "ingresa gasto realizado",
  },
  {
    type: "input",
    name: "monto",
    message: "ingresa monto gastado",
  },
];

export const promptGastos = async () => {
  return await inquirer.prompt(questions);
};
