import inquirer from "inquirer"
import fs from "fs"


const inputLoop =  (inputStr:string, interfaceString:string, intialStateStr:string, buf:string, FormName:string, fieldArray:string[], extension:string):void=>{

    inquirer.prompt([{
      "type" : "input",
      "name" : `field`,
      "message" : "Enter name of the field",
      "validate" : (input)=>{
       let ret = fieldArray.findIndex(i => i== input) < 0 ? true : false;
       if(ret){
         fieldArray.push(input)
       }
       return ret;
      }
    },
    {
      "type" : "list",
      "name" : "InputType",
      "choices" : [
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
      "type" : "list",
      "name" : "continue",
      "message" : "Should we continue to add more fields?",
      "choices" : ["Yes", "No"]
    },

    
  ]).then(ans=>{
    inputStr = `${inputStr}
    <Col sm={12} md={6} lg={3}>
      <FormGroup>
          <Label>${ans.field}</Label>
          <Input type="${ans.InputType}" 
          value={inputObj.${ans.field}} 
          onChange={(e)=>setInputObj({...inputObj, ${ans.field} :${createInterFace(ans.InputType) == "number" ? 'parseInt(e.target.value)' : 'e.target.value'} })}
 
      />
      </FormGroup>
    </Col>
    `

    interfaceString = `${interfaceString}  ${ans.field} : ${createInterFace(ans.InputType)};`
    intialStateStr = `${intialStateStr}  
    ${ans.field} : undefined,`

    if(ans.continue == "Yes"){
      inputLoop(inputStr, interfaceString, intialStateStr, buf,FormName, fieldArray, extension)
    }else{
      buf = buf.replace(`<><Row></Row></>`, `
      <>
        <Row> 
          ${inputStr}
        </Row>
      </>`)

      buf = buf.replace(`interface FORM{name:string}`, `interface FORM{${interfaceString}}` )

      buf = buf.replace(`initialState= {name:""}`, `initialState= {${intialStateStr}}`)

      fs.writeFileSync(`${FormName}.${extension}`, buf);
    }
    
})//end of then

}


const createInterFace = (inputType:string):string=>{
  let cur:any = {
    'text'              :  "string"      ,
    'number'            :  "number"      ,
    'email'             :  "string"      ,
    'password'          :  "string"      ,
    'select'            :  "any"         ,
    'file'              :  "any"         ,
    'radio'             :  "any"         ,
    'checkbox'          :  "string"      ,
    'textarea'          :  "string"      ,
    'date'              :  "string"        ,
    'datetime-local'    :  "string"        ,
    'hidden'            :  "string"      ,
    'image'             :  "any"         ,
    'month'             :  "any"         ,
    'range'             :  "any"         ,
    'search'            :  "string"      ,
    'tel'               :  "any"         ,
    'url'               :  "string"      ,
    'week'              :  "string"      ,
    'datetime'          :  "string"      ,
    'time'              :  "string"      ,
    'color'             :  "string"      ,

  }
let ret:string="";
Object.keys(cur).forEach(el=> el==inputType ? ret = cur[el] : "")
 return ret;
}






export {inputLoop}