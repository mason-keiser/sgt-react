import React from 'react';

export default class GradeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grade: '',
            course: '',
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

    handleReset(event) {
      this.setState({
        name: '',
        course: '',
        grade: ''
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
              <input type='text' className='form-control' placeholder='Name' value={this.state.value} onChange = {this.handleChange}/>
            </div>

            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'><i className='far fa-list-alt'></i></span>
              </div>
              <input type='text' className='form-control' placeholder='Course' value={this.state.value} onChange ={this.handleChange} />
            </div>

            <div className='input-group mb-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'><i className='fas fa-graduation-cap'></i></span>
              </div>
              <input type='text' className='form-control' placeholder='Grade' value={this.state.value} onChange ={this.handleChange}/>
            </div>

            <button onClick={this.handleSubmit}type='submit' className='addButton btn mr-3'>Add</button>
            <button type='reset' className='resetButton btn' >Cancel</button>
          </div>
        </form>

      </div>
        );
    }
}
