// === DO NOT MODIFY THIS FILE ===

abstract class Database {
    abstract get(table: string, key: string): Promise<any>;
    abstract set(table: string, key: string, value: any): Promise<void>;
    abstract delete(table: string, key: string): Promise<void>;
    abstract clear(table: string): Promise<void>;
    abstract keys(table: string): Promise<string[]>;
    abstract tables(): Promise<string[]>;
}

// You do not need to understand this code.
// Look at the abstract class above for the interface.
class InMemoryDatabase extends Database {
    private dbMap: Map<string, Map<string, any>>;

    constructor() {
        super();
        this.dbMap = new Map();
    }

    async get(table: string, key: string): Promise<any> {
        const t = this.dbMap.get(table);
        if (!t) {
            return undefined;
        }
        return t.get(key);
    }

    async set(table: string, key: string, value: any): Promise<void> {
        let t = this.dbMap.get(table);
        if (!t) {
            t = new Map<string, any>();
            this.dbMap.set(table, t);
        }
        t.set(key, value);
    }

    async delete(table: string, key: string): Promise<void> {
        const t = this.dbMap.get(table);
        if (!t) {
            return;
        }
        t.delete(key);
    }

    async clear(table: string): Promise<void> {
        this.dbMap.delete(table);
    }

    async keys(table: string): Promise<string[]> {
        const t = this.dbMap.get(table);
        if (!t) {
            return [];
        }
        return Array.from(t.keys());
    }

    async tables(): Promise<string[]> {
        return Array.from(this.dbMap.keys());
    }
}

const db = new InMemoryDatabase();

export default db;
