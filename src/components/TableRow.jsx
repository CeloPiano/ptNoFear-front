import TableContent from "./TableContent";

export default function TableRow(props) {
    let id = props.content.id 
    delete props.content.id
    let Row =  Object.entries(props.content).map((element,index) =>(
        <TableContent key={index} id ={id} content = {element} />
    ))
    return (
        <tr className="bg-gray-color rounded-md text-black m-4 p-3 flex justify-between">
            {Row}
        </tr>
    )
}
