let instance = null;

export default class FetchMock {

    constructor() {
        this.fetchMapping = {};
    }

    static getInstance() {
        if (!instance) {
            instance = new FetchMock();
        }
        return instance;
    }

    fetch(url, props) {
        const method = props ? (props.method || 'GET') : 'GET';
        if (!this.fetchMapping[url] || !this.fetchMapping[url][method]) {
            throw new Error('Could not find mock mapping for url: [' + url + '] and method: [' + method + ']');
        }
        var mapping = this.fetchMapping[url][method];
        const response = {
            status: mapping.status || 200,
            json: () => {
                return JSON.stringify(mapping.result);
            }
        };

        return new Promise(callback => {
            callback(response);
            return this;
        });
    }

    mock(url, method, result, status = 200) {
        if (!this.fetchMapping[url]) {
            this.fetchMapping[url] = {};
        }

        if (!this.fetchMapping[url][method]) {
            this.fetchMapping[url][method] = {};
        }

        this.fetchMapping[url][method] = {
            status: status,
            result: result
        };
    }

    reset() {
        this.fetchMapping = {};
    }

}

