import React from 'react';

class Project extends React.Component {
    render() {
        return (
            <div className='project-card'>
                <h1>{this.props.data.title}</h1>
                <p>{this.props.data.info}</p>
                <a href={this.props.data.link}>Link to Page</a>
            </div>
        );
    }
}

export default Project;
