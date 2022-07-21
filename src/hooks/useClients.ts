import { useEffect } from 'react';
import { useState } from 'react';
import CollectionClient from "src/backend/db/CollectionClient";
import Client from "src/core/Client";
import ClientRepository from 'src/core/ClientRepository';
import useTableOrForm from './useTableOrForm';

export default function useClients() {

    const {
        displayTable,
        displayForm,
        showTable
    } = useTableOrForm();

    const [clientSelected, setClientSelected] = useState<Client>(null);
    const [clients, setClients] = useState<Client[]>(null);
  
    const repository: ClientRepository = new CollectionClient();
    
    const getAll = () => {
        repository.getAll().then( clients => {
        setClients(clients);
        displayTable();
        })
    }

    const editClient = (client: Client) => {
        setClientSelected(client);
        displayForm();
    }

    const removeClient = async (client: Client) => {
        await repository.remove(client);
        getAll();
    }

    const saveClient = async (client: Client) => {
        await repository.save(client);
        getAll();
    }
    
    const newCliente = () => {
        setClientSelected(null);
        displayForm();
    }

    useEffect(getAll, []);

    return {
        clientSelected,
        clients,
        newCliente,
        saveClient,
        removeClient,
        getAll,
        editClient,
        showTable,
        displayTable,
    }
};
