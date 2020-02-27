import React from 'react';

const UserCard = props => {
    return (
        <div>
            <p>Name:{props.name}</p>
            <p>Email:{props.email}</p>
            <p>Role:{props.role}</p>
        </div>
    );
};

export default UserCard;