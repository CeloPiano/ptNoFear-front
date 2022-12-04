import CheckButton from "./CheckButton"

export default function TableContent(props) {
    return (
        typeof props.content[1] !== "boolean" ? <td>{props.content[1]}</td> :
        <td><CheckButton id ={props.id} isAdmin = {props.content[1]} /></td>
    )
}
