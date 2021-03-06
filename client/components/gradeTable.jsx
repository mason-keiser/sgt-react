import React from 'react';
import Grades from './grades';

class GradeTable extends React.Component {
  render() {
      return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Grade</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
              {
                  this.props.grades.map(grade => {
                      return (<Grades 
                        key={grade.id} 
                        grade={grade}
                        course={grade.course}
                        name={grade.name}
                        deleteGrade = {this.props.deleteGrade}
                      />)
                  })
              }
          </tbody>
        </table>
      );
  }
}

export default GradeTable;