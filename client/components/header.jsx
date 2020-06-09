import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div className = 'headerContainer'>
                <h1 className= 'title'>Student Grade Table</h1>
        <h2 className= 'gradeAvg'>Average Grade: <span className='average'>{this.props.average}</span></h2>
            </div>
        );
    }
}

export default Header;