import React, {ReactElement, useState, useEffect} from 'react'
import {Table, LinkP, column} from "reactstrap-react-lib"

interface Props {
    idUrl:string;
    data : [];
    pageNo : any

}

export default function Example(props: Props): ReactElement {
    //Pagination
        const [pageData, setpageData] = useState([]) 
        const [pagesize, setPagesize] = useState(5)
        useEffect(() => {
            pageDataHandle(0)
            return () => {}
        }, [props.data])
        const pageDataHandle = (pageNo:number)=>{
            let pageStart = pageNo * pagesize
           
            let curPageData= props.data.slice ( pageStart , pageStart + pagesize) 
            setpageData(curPageData)
        }

    //end of pagination




    const columns:column[] =React.useMemo(() => [
        {
            "Header" : "Id",
            "accessor" : "id",
            "dataType" : "number",
            Cell : ({value})=>< LinkP value={value} link={`${props.idUrl}/${value}`} />,
        }

    ], [])
    return (
            <>
                <Table
                    columns= {columns}
                    data = {pageData as []}
                    filter = "Both"
                    sort   = {true}
                    pagination = {
                        {
                            "nextPage" : async(pageNo=0)=>{
                               
                                pageDataHandle(pageNo)
                                return true;
                            },
                            "previousPage" : async(pageNo) =>{
      
                                pageDataHandle(pageNo=0)
                                return true
                            }
                        }
                    }
                />
            </>
    )
}

