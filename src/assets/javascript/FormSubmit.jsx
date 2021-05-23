const React, { useState } = require ('react')
const {Row, Col, Input, Label, FormGroup} = require ("reactstrap")
const {FormSubmit} = require("reactstrap-react-lib")



export default function Example(props) {
    let initialState
    if(props.inputsElements === undefined){
        initialState= {name:""}
    }else{
        initialState = props.inputsElements;
    }

    const [inputObj, setInputObj] = useState(initialState)
    return (
        <>
            <FormSubmit
                Inputs = {
                    <><Row></Row></>
                }
                curUri = {props.uri}
                curObj = {["POST", inputObj]}
                onSuccess = {(res)=>res.data?.mes  === undefined ? "success" : res.data.mes}
                onError = {(err)=> err.response?.data === undefined ? "error" : err.response.data }
                reset = {()=> setInputObj(initialState)}
                validation = {()=>""}
 
            />
        </>

    )
}