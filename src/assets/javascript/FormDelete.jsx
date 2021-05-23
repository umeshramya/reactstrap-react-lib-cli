const React = require ('react')
const {FormDelete}  = require ("reactstrap-react-lib")

export default function Example(props) {
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
