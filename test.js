const { Interface } = require("readline")


const createInterFace = (inputType)=>{
   let cur = {
        'text'              :  "string"      ,
        'number'            :  "number"      ,
        'email'             :  "string"      ,
        'password'          :  "string"      ,
        'select'            :  "any"         ,
        'file'              :  "any"         ,
        'radio'             :  "any"         ,
        'checkbox'          :  "string"      ,
        'textarea'          :  "string"      ,
        'date'              :  "Date"        ,
        'datetime-local'    :  "Date"        ,
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
    let ret;
     Object.keys(cur).forEach(el=> el==inputType ? ret = cur[el] : "")
     return ret;
    }


console.log(createInterFace("text"))
    