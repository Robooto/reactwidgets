import axios from 'axios';

class ProgressNoteConfig {

    static init() {
        this.axiosConfig();
    }

    static axiosConfig() {
        axios.defaults.headers.common[''] = 'fl8V-3l9DE6schFrxBIPhkjLl_8mqHgbjQnp-2vB4NM1';
        axios.defaults.baseURL = '';
    }
}

export default ProgressNoteConfig;