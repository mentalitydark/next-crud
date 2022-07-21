import Client from "src/core/Client";
import ClientRepository from "src/core/ClientRepository";
import firebase from "src/backend/config";

export default class CollectionClient implements ClientRepository {

    #conversor = {
        toFirestore(client: Client) {
            return {
                name: client.name,
                age: client.age
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
            const data = snapshot?.data(options);

            return new Client(data.name, data.age, snapshot?.id);
        }
    }

    async save(client: Client): Promise<Client> {
        if(client?.id) {
            await this.collection().doc(client.id).set(client);
            return client;
        }

        const docRef = await this.collection().add(client);
        const doc = await docRef.get();
        return doc.data();
    }

    async remove(client: Client): Promise<void> {
        return await this.collection().doc(client.id).delete();
    }

    async getAll(): Promise<Client[]> {
        const query = await this.collection().get();
        return query.docs.map( doc => doc.data()) ?? [];
    }

    private collection() {
        return firebase.firestore().collection('clients').withConverter(this.#conversor);
    }
}