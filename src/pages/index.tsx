import Button from "src/components/Button";
import Form from "src/components/Form";
import Layout from "src/components/Layout";
import Table from "src/components/Table";
import useClients from "src/hooks/useClients";

export default function Home() {

  const {
    newCliente,
    editClient,
    removeClient,
    saveClient,
    clientSelected,
    clients,
    showTable,
    displayTable
  } = useClients();

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gray-50
    `}>
      <Layout title="Cadastro Simples">
        {showTable ? (
          <>
            <div className="flex justify-end">
              <Button className="mb-4" onClick={newCliente}>
                Novo cliente
              </Button>
            </div>
            <Table clients={clients} editClient={editClient} removeClient={removeClient}/>
          </>
        ) : (
          <Form client={clientSelected} onChange={saveClient} onCancel={() => displayTable()}/>
        )}
      </Layout>
    </div>
  )
}
