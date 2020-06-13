import React from 'react';

export default class GradeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grade: null,
            course: null,
            name: null
        }
        this.handleNewName = this.handleNewName.bind(this);
        this.handleNewCourse = this.handleNewCourse.bind(this);
        this.handleNewGrade = this.handleNewGrade.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNewName() {
      this.setState({
        name: event.target.value
      });
    }
  
    handleNewCourse() {
      this.setState({
        course: event.target.value
      });
    }
  
    handleNewGrade() {
      this.setState({
        grade: event.target.value
      });
    }
  
    handleReset(event) {
      this.setState({
        name: null,
        course: null,
        grade: null
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.addGrade(
        {
          name: this.state.name,
          course: this.state.course,
          grade: Number(this.state.grade)
        }
      );
      this.handleReset();
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
              <input type='text' className='form-control' placeholder='Name' value={this.state.value} onChange = {this.handleNewName}/>
            </div>

            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'><i className='far fa-list-alt'></i></span>
              </div>
              <input type='text' className='form-control' placeholder='Course' value={this.state.value} onChange ={this.handleNewCourse} />
            </div>

            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'><i className='fas fa-graduation-cap'></i></span>
              </div>
              <input type='text' className='form-control' placeholder='Grade' value={this.state.value} onChange ={this.handleNewGrade}/>
            </div>

            <button onClick={this.handleSubmit}type='submit' className='addButton btn mr-3'>Add</button>
            <button type='reset' className='resetButton btn' >Cancel</button>
          </div>
        </form>

      </div>
        );
    }
}
