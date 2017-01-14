import axios from 'axios';

class ProgressNoteConfig {

    static init() {
        this.axiosConfig();
    }

    static axiosConfig() {
        axios.defaults.headers.common['X-OA-AUTH-TOKEN'] = 'W5lW9RiBRx1uiScOtoRse687fR7NSIt6nY4rd2zKSsM1';
        axios.defaults.baseURL = 'https://oa-dev-113.oadomain.com/WebAPI/v1';
    }
}

export default ProgressNoteConfig;