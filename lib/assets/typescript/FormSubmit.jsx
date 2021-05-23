"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var reactstrap_1 = require("reactstrap");
var reactstrap_react_lib_1 = require("reactstrap-react-lib");
function Example(props) {
    var initialState;
    if (props.inputsElements === undefined) {
        initialState = { name: "" };
    }
    else {
        initialState = props.inputsElements;
    }
    var _a = react_1.useState(initialState), inputObj = _a[0], setInputObj = _a[1];
    return (<>
            <reactstrap_react_lib_1.FormSubmit Inputs={<><reactstrap_1.Row></reactstrap_1.Row></>} curUri={props.uri} curObj={["POST", inputObj]} onSuccess={function (res) { var _a; return ((_a = res.data) === null || _a === void 0 ? void 0 : _a.mes) === undefined ? "success" : res.data.mes; }} onError={function (err) { var _a; return ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === undefined ? "error" : err.response.data; }} reset={function () { return setInputObj(initialState); }} validation={function () { return ""; }}/>
        </>);
}
exports.default = Example;
//# sourceMappingURL=FormSubmit.jsx.map