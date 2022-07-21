export default class Client {
    #id: string;
    #name: string;
    #age: number;

    public constructor(name: string, age: number, id: string = null) {
        this.#name = name;
        this.#age = age;
        this.#id = id;
    }

    public get id() { return this.#id; }

    public get name() { return this.#name; }

    public get age() { return this.#age; }

    public static empty() {
        return new Client('', 0);
    }
}