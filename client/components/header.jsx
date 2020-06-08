import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div className = 'headerContainer'>
                <h1 className= 'title'>Student Grade Table</h1>
                <h2 className= 'gradeAvg'>Avg Grade</h2>
            </div>
        );
    }
}

export default Header;