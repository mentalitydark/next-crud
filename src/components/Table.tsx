import Client from "src/core/Client"
import { IconEdit, IconRemove } from "./Icons";

interface TableProps {
    clients: Client[];
    editClient?: (client: Client) => void;
    removeClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {

    const showActions = props.editClient || props.removeClient

    const renderHeader = () => (
        <thead className="w-full bg-gray-700 text-gray-100">
            <tr>
                <th className="text-left px-2 py-3">Id</th>
                <th className="text-left px-2 py-3">Nome</th>
                <th className="text-left px-2 py-3">Idade</th>
                {showActions ? (
                    <th className="px-2 py-3">Ações</th>
                ) : null}
            </tr>
        </thead>
    )

    const renderActions = (client: Client) => {
        return (
            <td className="flex justify-center">
                {props.editClient ? (
                <button onClick={ () => props.editClient(client)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full p-2 mx-1
                    hover:bg-blue-50
                `}>
                    {IconEdit}
                </button>
                ) : null}
                {props.removeClient ? (
                    <button onClick={ () => props.removeClient(client)} className={`
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 mx-1
                        hover:bg-blue-50
                    `}>
                        {IconRemove}
                    </button>
                ) : null}
            </td>
        )
    }

    const renderBody = () => props.clients?.map( (client, index) => (
        <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}`}>
            <td className="text-left px-2 py-3">{client.id}</td>
            <td className="text-left px-2 py-3">{client.name}</td>
            <td className="text-left px-2 py-3">{client.age}</td>
            {showActions ? renderActions(client) : null}
        </tr>
    ))

    return (
        <table className="w-full  rounded-lg overflow-hidden">
            {renderHeader()}
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    )
};
