#!/usr/bin/env node
import { getArgs } from "./helpers/argv";

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        //вывод help
    }
    if (args.s) {
        // сохранить город
    }
    // вывести погоду
};

initCLI();