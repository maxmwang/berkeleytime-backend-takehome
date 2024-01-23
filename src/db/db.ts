// === DO NOT MODIFY THIS FILE ===

abstract class Datastore {
    abstract get(table: string, key: string): Promise<any>;
    abstract set(table: string, key: string, value: any): Promise<void>;
    abstract delete(table: string, key: string): Promise<void>;
    abstract clear(table: string): Promise<void>;
    abstract keys(table: string): Promise<string[]>;
    abstract tables(): Promise<string[]>;
}

// You do not need to understand the below code.
// Look at the abstract class above for an interface.

/**
 * KeyValueStore is a key-value store that maps keys (string) to values (any) in memory.
 */
class KeyValueStore extends Datastore {
    private dbMap: Map<string, Map<string, any>>;

    constructor() {
        super();
        this.dbMap = new Map();
    }

    /**
     * Returns the value to which the specified key is mapped to in the specified table, or undefined if the table/key doesn't exist.
     */
    async get(table: string, key: string): Promise<any> {
        const t = this.dbMap.get(table);
        if (!t) {
            return undefined;
        }
        return t.get(key);
    }

    /**
     * Associates the specified value with the specified key in the specified table.
     */
    async set(table: string, key: string, value: any): Promise<void> {
        let t = this.dbMap.get(table);
        if (!t) {
            t = new Map<string, any>();
            this.dbMap.set(table, t);
        }
        t.set(key, value);
    }

    /**
     * Removes the mapping for the specified key from the specified table if present.
     */
    async delete(table: string, key: string): Promise<void> {
        const t = this.dbMap.get(table);
        if (!t) {
            return;
        }
        t.delete(key);
    }

    /**
     * Removes all mappings from the specified table.
     */
    async clear(table: string): Promise<void> {
        this.dbMap.delete(table);
    }

    /**
     * Returns an array of all keys in the specified table.
     */
    async keys(table: string): Promise<string[]> {
        const t = this.dbMap.get(table);
        if (!t) {
            return [];
        }
        return Array.from(t.keys());
    }

    /**
     * Returns an array of all table names.
     */
    async tables(): Promise<string[]> {
        return Array.from(this.dbMap.keys());
    }
}

const db = new KeyValueStore();

export default db;
