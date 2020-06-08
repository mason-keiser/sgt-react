import React from 'react';

class Grades extends React.Component{
    render(){
        return (
            <tr>
                <td>{this.props.grade.name}</td>
                <td>{this.props.grade.course}</td>
                <td>{this.props.grade.grade}</td>
            </tr>
        )
    }
}

export default Grades;