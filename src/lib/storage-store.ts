let store: StorageStore | undefined;

class StorageStore {
    private storage: Storage = localStorage; // it can be sessionstorage or localstorage (default: localstorage)

    constructor(type: Storage) {
        this.storage = type;
    }

    getItem(key: string): string | null {
        return this.storage.getItem(key);
    }
    
    setItem(key: string, value: string): void {
        this.storage.setItem(key, value);
    }
}

export function getStorageStore(type: Storage = localStorage) { // to avoid recreating multiple instance of storagestore
    if(store) return store;
    return new StorageStore(type);
}

export const USER_STORAGE = 'user';