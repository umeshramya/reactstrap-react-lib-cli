#!/usr/bin/env node
import inquirer from "inquirer"
import fs from "fs"
import path from "path"
import {inputLoop} from "./lib/formSubmit"
let buf:string;

inquirer.prompt([
  {
      type : "list",
      message : "Choose Language",
      name : "language",
      choices : ["Typescript", "Javascript"]
  },
  {
   type : "list",
   message : "Choose Form",
   name : "form",
   choices : ["FormSubmit", "Table", "FormDelete"]
  //  choices : ["FormSubmit", "FormDelete", "Table", "Admin Panel"]
}
]).then(answer=>{

   let filepath:string=""
   let language:string = answer.language;
   let extension:string = language == "Typescript" ? "tsx" : "jsx"
   /**
    * ============
    * FORM SUBMIT
    * ============
    */
    if(answer.form=='FormSubmit' ){
      if(language == 'Typescript' ){
        filepath = path.resolve(__dirname, "../src/assets/typescript/FormSubmit.tsx")
      }else if(language == 'Javascript'){
        filepath = path.resolve(__dirname, "../src/assets/javascript/FormSubmit.jsx")
      }
        
        buf = fs.readFileSync(filepath).toString();
      inquirer.prompt([
        {
          "type" : "input",
          "name" : "FormName",
          "message" : "Name of the component"
        }
      ]).then(ans=>{
      let fieldArray:string[]=[];
        buf = buf.replace(`Example`, ans.FormName)
       inputLoop("", "", "",buf, ans.FormName,fieldArray, extension)
      }).catch(err=> console.log(err))
    }


    /**
     * ==============
     * TABLE
     * ==============
     */
    if(answer.form=='Table' ){
      if(language == 'Typescript' ){
        filepath = path.resolve(__dirname, "../src/assets/typescript/Table.tsx")
      }else if(language == 'Javascript'){
        filepath = path.resolve(__dirname, "../src/assets/javascript/Table.jsx")
      }
      
      buf = fs.readFileSync(filepath).toString();
      inquirer.prompt([
        {
          "type" : "input",
          "name" : "FormName",
          "message" : "Name of the component"
        }
      ]).then(ans=>{
      let fieldArray:string[]=[];
        buf = buf.replace(`Example`, ans.FormName)
        fs.writeFileSync(`${ans.FormName}.${extension}`, buf);
      }).catch(err=> console.log(err))
    }

    /**
     * ==============
     * FORM DELETE
     * ==============
     */
     if( answer.form=='FormDelete' ){
      if(language == 'Typescript' ){
        filepath = path.resolve(__dirname, "../src/assets/typescript/FormDelete.tsx")
      }else if(language == 'Javascript'){
        filepath = path.resolve(__dirname, "../src/assets/javascript/FormDelete.jsx")
      }
      
      buf = fs.readFileSync(filepath).toString();
      inquirer.prompt([
        {
          "type" : "input",
          "name" : "FormName",
          "message" : "Name of the component"
        }
      ]).then(ans=>{
      let fieldArray:string[]=[];
        buf = buf.replace(`Example`, ans.FormName)
        fs.writeFileSync(`${ans.FormName}.${extension}`, buf);
      }).catch(err=> console.log(err))
    }




})





