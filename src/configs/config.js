import axios from 'axios';

class ProgressNoteConfig {

    static init() {
        this.axiosConfig();
    }

    static axiosConfig() {
        axios.defaults.headers.common['X-OA-AUTH-TOKEN'] = 'bgeo9bS-xsiV3VkCHj691T7iHb2wfGa2TBtKkPVxyOE1';
        axios.defaults.baseURL = 'https://oa-dev-113.oadomain.com/WebAPI/v1';
    }
}

export default ProgressNoteConfig;