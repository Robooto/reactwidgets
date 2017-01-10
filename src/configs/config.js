import axios from 'axios';

class ProgressNoteConfig {

    static init() {
        this.axiosConfig();
    }

    static axiosConfig() {
        axios.defaults.headers.common['X-OA-AUTH-TOKEN'] = 'gfTmLxPhoR8QqZ5_PYoBv8Co9hncN9i1uMc615GRdxI1';
        axios.defaults.baseURL = 'https://oa-dev-113.oadomain.com/WebAPI/v1';
    }
}

export default ProgressNoteConfig;