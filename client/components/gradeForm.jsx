import React from 'react';

export default class GradeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grade: '',
            course: '',
            name: ''
        }
        this.handleNewName = this.handleNewName.bind(this);
        this.handleNewCourse = this.handleNewCourse.bind(this);
        this.handleNewGrade = this.handleNewGrade.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNewName() {
        this.setState({
            course: this.state.grade.course,
            name: event.target.value,
            grade: this.state.grade.grade
        });
      }
    
    handleNewCourse() {
        this.setState({
            course: event.target.value,
            name: this.state.grade.name,
            grade: this.state.grade.grade
        });
      }
    
    handleNewGrade() {
        this.setState({
            course: this.state.grade.course,
            name: this.state.grade.name,
            grade: Number(event.target.value)
        });
    }
    
    handleSubmit(event) {
        const newGrade = this.state.grade;
        this.props.onSubmit(newGrade);
        event.preventDefault();
    }
    
      handleReset() {
        event.preventDefault();
        this.setState({
          name: null,
          course: null,
          grade: null
        });
    }
    
    render(){
        return (
          <div className='formContainer'>
            <form onSubmit= {this.handleSubmit} onReset={this.handleReset} method= 'post'>
             <div className='form-group'>

            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className ='input-group-text'><i className='fas fa-user'></i></span>
              </div>
              <input type='text' className='form-control' name='name' placeholder='Name' value={this.state.value} onChange = {this.handleNameChange}/>
            </div>

            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'><i className='far fa-list-alt'></i></span>
              </div>
              <input type='text' className='form-control' name='course' placeholder='Course' value={this.state.value} onChange ={this.handleCourseChange} />
            </div>

            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'><i className='fas fa-graduation-cap'></i></span>
              </div>
              <input type='text' className='form-control' name='grade' placeholder='Grade' value={this.state.value} onChange ={this.handleGradeChange}/>
            </div>

            <button type='submit' className='addButton btn mr-3'>Add</button>
            <button type='reset' className='resetButton btn' >Cancel</button>

          </div>
        </form>

      </div>
        );
    }
}