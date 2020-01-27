import React, {Component} from 'react';
import Students from "../student/component";
import StudentsService from "../student/service";

class StudentManagementSystem extends Component {

    constructor(props) {
        super(props);

        this.studentsService = new StudentsService();
    }

    state = {
        students: []
    }


    componentDidMount() {
        this.studentsService.retrieveStudents().then(students => {
            this.setState({students: students});
        })
    }

    render() {
        return (
            <Students students={this.state.students} />
        )
    }
}

export default StudentManagementSystem;