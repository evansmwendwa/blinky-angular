import { Injectable } from '@angular/core';

declare var localStorage: any;

@Injectable()
export class StateService {
    private state: any;
    private baseKey = '__blinky__data';

    constructor() {
        this.state = this.getState();
    }

    public getState(): any {
        let _raw: any;
        let _decoded: any;

        try {
            if( this.storageAvailable() ) {
                _raw = localStorage.getItem(this.baseKey);

                if(_raw === null) {
                    _raw = '{}';
                }
            }

            return JSON.parse(_raw);

        } catch(e) {
            return {};
        }
    }

    private updateState( data: any ): boolean {
        let _encoded: any;

        if(!this.storageAvailable() ) {
            return false;
        }

        try {
            localStorage.setItem( this.baseKey, JSON.stringify(data) );
            return true;
        } catch(e) {
            return false;
        }
    }

    public deleteState() {
        this.state = {};
        try {
            localStorage.removeItem(this.baseKey);
        } catch(e) {
            console.log('ERROR! Problem accessing localStorage');
        }
    }

    public set(key: string, value: any) {
        let _stateType = typeof this.state;

        if(_stateType === 'object') {
            if(_stateType === null) {
                this.state = {};
            }
        } else {
            this.state = {};
        }

        try {
            this.state[key] = value;
        } catch(e) {
            console.log('ERROR! Invalid state object');
            console.log(e);
        }

        this.updateState(this.state);
    }

    public get(key: string, defaultValue: any = null) {
        if(!this.state.hasOwnProperty(key)) {
            return defaultValue;
        }

        return this.state[key];
    }

    public remove(key: string) {
        try {
            this.set(key, '');
            delete this.state[key];
            this.updateState(this.state);
        } catch(e) {
            console.log(e);
        }

    }

    private storageAvailable(): boolean {
        const x = '__storage_test__';

        try {
            localStorage.setItem(x, x);
            localStorage.removeItem(x);
            return true;
        } catch(e) {
            console.log('WARNING! Localstorage is either disabled or not supported by your browser. Optimal performance has been affected');
            return false;
        }
    }

}
