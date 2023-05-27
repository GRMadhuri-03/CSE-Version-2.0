import React from 'react';

const FacultyCard = ({ name, picture, Designition, email, phone }) => {
  return (
    <div className="card">
      <div className="picture">
        <img src={picture} alt={name} />
      </div>
      <div className="contact-details">
        <h3>{name}</h3>
        <p>{Designition}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default FacultyCard;
