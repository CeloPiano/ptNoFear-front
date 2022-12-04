import TableRow from "./TableRow"

export default function TableUser(props){

    let tabelaUser = props.Users.map((element) =>(
        <TableRow key={element.id} content = {element} />
    ))
    return (
        <div className="p-10 rounded-3xl bg-button-color m-12 mx-auto w-[60vw] shadow-default">
            <h1 className="m-4 text-4xl">Usuários</h1>
            <table className="w-[100%]">
            <thead>
                <tr className="mt-14 mx-8 flex justify-between">
                    <th>Membro</th>
                    <th>Admin</th>
                </tr>
            </thead>
            <tbody>
                {tabelaUser}
            </tbody>
        </table>
        </div>
    )
} 