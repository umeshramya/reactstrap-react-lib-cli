const React, {useState, useEffect} = require('react')
const {Table, LinkP} = require ("reactstrap-react-lib")



export default function Example(props){
    //Pagination
        const [pageData, setpageData] = useState([]) 
        const [pagesize, setPagesize] = useState(5)
        useEffect(() => {
            pageDataHandle(0)
            return () => {}
        }, [props.data])
        const pageDataHandle = (pageNo)=>{
            let pageStart = pageNo * pagesize
           
            let curPageData= props.data.slice ( pageStart , pageStart + pagesize) 
            setpageData(curPageData)
        }

    //end of pagination




    const columns =React.useMemo(() => [
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
                    data = {pageData}
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

