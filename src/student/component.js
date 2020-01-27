import React, { Component } from 'react'
import StudentsService from './service';

import MaterialTable from "material-table";

class Students extends Component {

    state = {
        students: []
    };

    constructor(props) {
        super(props);

        this.studentsService = new StudentsService();
    }


    componentDidMount() {
        this.setState({students: this.props.students});
    }

    render() {
        return (
            <div style={{maxWidth: "100%"}}>
                <MaterialTable
                    editable={{
                        isEditable: rowData => rowData.name === "a", // only name(a) rows would be editable
                        isDeletable: rowData => rowData.name === "b", // only name(a) rows would be deletable
                        onRowAdd: newStudent =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        this.studentsService.createStudent(newStudent).then(response => {
                                            const students = this.state.students;
                                            students.push(newStudent);
                                            this.setState({ students }, () => resolve());
                                        })
                                    }
                                    resolve();
                                }, 1000);
                            }),
                        onRowUpdate: (newStudent, oldStudent) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        this.studentsService.updateStudent(newStudent).then(response => {
                                            const students = this.state.students;
                                            const index = students.indexOf(oldStudent);
                                            students[index] = newStudent;
                                            this.setState({ students }, () => resolve());
                                        })
                                    }
                                    resolve();
                                }, 1000);
                            }),
                        onRowDelete: oldStudent =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        this.studentsService.deleteStudent(oldStudent).then(response => {
                                            let students = this.state.students;
                                            const index = students.indexOf(oldStudent);
                                            students.splice(index, 1);
                                            this.setState({ students }, () => resolve());
                                        })
                                    }
                                    resolve();
                                }, 1000);
                            })
                    }}
                    columns={[
                        {title: "Student Name", field: "student_name"},
                        {title: "DOB", field: "dob"},
                        {title: "Address", field: "address"},
                        {title: "Phone", field: "phone", "type": "numeric"},
                        {title: "Major", field: "major"},
                    ]}
                    data={this.props.students}
                    title="Students"
                />
            </div>
        );
    }

}

export default Students