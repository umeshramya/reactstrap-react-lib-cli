import React, { ReactElement } from 'react'
import {FormDelete} from "reactstrap-react-lib"
import {Row, Col} from "reactstrap"

interface Props {
    uri:string;
    id:any
}

export default function Example(props: Props): ReactElement {
    return (
        <>
            <FormDelete
                curUri = {props.uri}
                curObj = {["POST" , {id: props.id}]}
                onSuccess = {(res)=> res.data.mes ===undefined ? "Deleted record" : res.data.mes }
                onError = {(err)=>err.response?.data === undefined ? "Some error occured" : err.response.data}
            />
        </>
    )
}
