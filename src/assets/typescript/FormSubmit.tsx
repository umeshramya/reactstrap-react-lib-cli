import React, { ReactElement, useState } from 'react'
import {Row, Col, Input, Label, FormGroup} from "reactstrap"
import {FormSubmit} from "reactstrap-react-lib"

interface FORM{name:string}

interface Props{
    uri:string;
    inputsElements: FORM
}

export default function Example(props: Props): ReactElement {
    let initialState:FORM
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