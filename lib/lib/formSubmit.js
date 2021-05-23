"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputLoop = void 0;
var inquirer_1 = __importDefault(require("inquirer"));
var fs_1 = __importDefault(require("fs"));
var inputLoop = function (inputStr, interfaceString, intialStateStr, buf, FormName, fieldArray, extension) {
    inquirer_1.default.prompt([{
            "type": "input",
            "name": "field",
            "message": "Enter name of the field",
            "validate": function (input) {
                var ret = fieldArray.findIndex(function (i) { return i == input; }) < 0 ? true : false;
                if (ret) {
                    fieldArray.push(input);
                }
                return ret;
            }
        }, {
            "type": "list",
            "name": "InputType",
            "choices": [
                'text',
                'number',
                'email',
                'password',
                'select',
                'file',
                'radio',
                'checkbox',
                'textarea',
                'date',
                'datetime-local',
                'hidden',
                'image',
                'month',
                'range',
                'search',
                'tel',
                'url',
                'week',
                'datetime',
                'time',
                'color',
            ]
        },
        {
            "type": "list",
            "name": "continue",
            "message": "Should we continue to add more fields?",
            "choices": ["Yes", "No"]
        },]).then(function (ans) {
        inputStr = inputStr + "\n    <Col sm={12} md={6} lg={3}>\n      <FormGroup>\n          <Label>" + ans.field + "</Label>\n          <Input type=\"" + ans.InputType + "\" \n          value={inputObj." + ans.field + "} \n          onChange={(e)=>setInputObj({...inputObj, " + ans.field + " :" + (createInterFace(ans.InputType) == "number" ? 'parseInt(e.target.value)' : 'e.target.value') + " })}\n \n      />\n      </FormGroup>\n    </Col>\n    ";
        interfaceString = interfaceString + "  " + ans.field + " : " + createInterFace(ans.InputType) + ";";
        intialStateStr = intialStateStr + "  \n    " + ans.field + " : undefined,";
        if (ans.continue == "Yes") {
            inputLoop(inputStr, interfaceString, intialStateStr, buf, FormName, fieldArray, extension);
        }
        else {
            buf = buf.replace("<><Row></Row></>", "\n      <>\n        <Row> \n          " + inputStr + "\n        </Row>\n      </>");
            buf = buf.replace("interface FORM{name:string}", "interface FORM{" + interfaceString + "}");
            buf = buf.replace("initialState= {name:\"\"}", "initialState= {" + intialStateStr + "}");
            fs_1.default.writeFileSync(FormName + "." + extension, buf);
        }
    }); //end of then
};
exports.inputLoop = inputLoop;
var createInterFace = function (inputType) {
    var cur = {
        'text': "string",
        'number': "number",
        'email': "string",
        'password': "string",
        'select': "any",
        'file': "any",
        'radio': "any",
        'checkbox': "string",
        'textarea': "string",
        'date': "string",
        'datetime-local': "string",
        'hidden': "string",
        'image': "any",
        'month': "any",
        'range': "any",
        'search': "string",
        'tel': "any",
        'url': "string",
        'week': "string",
        'datetime': "string",
        'time': "string",
        'color': "string",
    };
    var ret = "";
    Object.keys(cur).forEach(function (el) { return el == inputType ? ret = cur[el] : ""; });
    return ret;
};
//# sourceMappingURL=formSubmit.js.map