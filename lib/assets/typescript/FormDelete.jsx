"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var reactstrap_react_lib_1 = require("reactstrap-react-lib");
function Example(props) {
    return (<>
            <reactstrap_react_lib_1.FormDelete curUri={props.uri} curObj={["POST", { id: props.id }]} onSuccess={function (res) { return res.data.mes === undefined ? "Deleted record" : res.data.mes; }} onError={function (err) { var _a; return ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data) === undefined ? "Some error occured" : err.response.data; }}/>
        </>);
}
exports.default = Example;
//# sourceMappingURL=FormDelete.jsx.map