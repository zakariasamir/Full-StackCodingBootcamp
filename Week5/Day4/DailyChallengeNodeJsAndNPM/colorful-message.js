import chalk from "chalk";

const colorfulMessage = (message, color) => {
  console.log(chalk[color](message));
};

export default colorfulMessage;
