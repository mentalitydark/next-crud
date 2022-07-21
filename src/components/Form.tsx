import { useState } from "react";
import Client from "src/core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client;
    onChange?: (client: Client) => void;
    onCancel?: () => void;
}

export default function Form(props: FormProps) {
    const [name, setName] = useState(props.client?.name ?? '');
    const [age, setAge] = useState(props.client?.age ?? 0);

    return (
        <div>
            <Input text="Nome" value={name} onChange={setName}/>
            <Input text="Idade" type="number" value={age} onChange={setAge}/>
            <div className={`flex justify-end mt-3`}>
                <Button color="green" className="mr-2" onClick={() => props.onChange(new Client(name, +age, props.client?.id))}>
                    {props.client ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.onCancel}>Cancelar</Button>
            </div>
        </div>
    )
};
