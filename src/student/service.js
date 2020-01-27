import Configuration from './configuration';
import axios from 'axios';

class StudentService {


    constructor() {
        this.config = new Configuration();
    }

    async retrieveStudents() {
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";

        return axios.get(this.config.STUDENT_COLLECTION_URL)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error.message);
            })
    }
    async createStudent(newStudent) {
        return axios.post(this.config.STUDENT_COLLECTION_URL, {newStudent})
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    async deleteStudent(student) {
        let studentDeleteLink = `${this.config.STUDENT_COLLECTION_URL}/${student.student_id}`;
        return axios.delete(studentDeleteLink, {student})
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error.message);
            });
    }
    async updateStudent(student) {
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";

        let studentUpdateLink = `${this.config.STUDENT_COLLECTION_URL}/${student.student_id}`;
        return axios.put(studentUpdateLink, {student})
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error.message);
            });
    }
}
export default StudentService;