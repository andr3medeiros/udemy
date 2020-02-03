import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render() {
        const { user }= this.props;
        
        if(!user) {
            return null;
        }

        return <h3>{user.name}</h3>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
}

export default connect(mapStateToProps)(UserHeader);