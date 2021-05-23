#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var formSubmit_1 = require("./lib/formSubmit");
var buf;
inquirer_1.default.prompt([
    {
        type: "list",
        message: "Choose Language",
        name: "language",
        choices: ["Typescript", "Javascript"]
    },
    {
        type: "list",
        message: "Choose Form",
        name: "form",
        choices: ["FormSubmit", "Table", "FormDelete"]
        //  choices : ["FormSubmit", "FormDelete", "Table", "Admin Panel"]
    }
]).then(function (answer) {
    var filepath = "";
    var language = answer.language;
    var extension = language == "Typescript" ? "tsx" : "jsx";
    /**
     * ============
     * FORM SUBMIT
     * ============
     */
    if (answer.form == 'FormSubmit') {
        if (language == 'Typescript') {
            filepath = path_1.default.resolve(__dirname, "../src/assets/typescript/FormSubmit.tsx");
        }
        else if (language == 'Javascript') {
            filepath = path_1.default.resolve(__dirname, "../src/assets/javascript/FormSubmit.jsx");
        }
        buf = fs_1.default.readFileSync(filepath).toString();
        inquirer_1.default.prompt([
            {
                "type": "input",
                "name": "FormName",
                "message": "Name of the component"
            }
        ]).then(function (ans) {
            var fieldArray = [];
            buf = buf.replace("Example", ans.FormName);
            formSubmit_1.inputLoop("", "", "", buf, ans.FormName, fieldArray, extension);
        }).catch(function (err) { return console.log(err); });
    }
    /**
     * ==============
     * TABLE
     * ==============
     */
    if (answer.form == 'Table') {
        if (language == 'Typescript') {
            filepath = path_1.default.resolve(__dirname, "../src/assets/typescript/Table.tsx");
        }
        else if (language == 'Javascript') {
            filepath = path_1.default.resolve(__dirname, "../src/assets/javascript/Table.jsx");
        }
        buf = fs_1.default.readFileSync(filepath).toString();
        inquirer_1.default.prompt([
            {
                "type": "input",
                "name": "FormName",
                "message": "Name of the component"
            }
        ]).then(function (ans) {
            var fieldArray = [];
            buf = buf.replace("Example", ans.FormName);
            fs_1.default.writeFileSync(ans.FormName + "." + extension, buf);
        }).catch(function (err) { return console.log(err); });
    }
    /**
     * ==============
     * FORM DELETE
     * ==============
     */
    if (answer.form == 'FormDelete') {
        if (language == 'Typescript') {
            filepath = path_1.default.resolve(__dirname, "../src/assets/typescript/FormDelete.tsx");
        }
        else if (language == 'Javascript') {
            filepath = path_1.default.resolve(__dirname, "../src/assets/javascript/FormDelete.jsx");
        }
        buf = fs_1.default.readFileSync(filepath).toString();
        inquirer_1.default.prompt([
            {
                "type": "input",
                "name": "FormName",
                "message": "Name of the component"
            }
        ]).then(function (ans) {
            var fieldArray = [];
            buf = buf.replace("Example", ans.FormName);
            fs_1.default.writeFileSync(ans.FormName + "." + extension, buf);
        }).catch(function (err) { return console.log(err); });
    }
});
//# sourceMappingURL=index.js.map