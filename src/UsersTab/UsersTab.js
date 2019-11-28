import './users-tab.css';

import React from 'react';
import PropTypes from 'prop-types';

function UsersTab({ users = [] }) {
  return (
    <section>
      {users.map(
        ({
          id,
          name,
          username,
          email,
          address: { street, suite, city, zipcode, geo: { lat, lng } = {} } = {
            geo: {}
          },
          phone,
          website,
          company: { name: companyName, catchPhrase, bs } = {}
        }) => (
          <div className="user" key={id}>
            <h2 className="user-name">{name}</h2>
            <p className="user-username">{username}</p>
            <a href={`mailto:${email}`} className="user-email">
              {email}
            </a>
            <div className="user-address">
              <p>Address:</p>
              <p>
                <span className="user-address-signature">street:</span> {street}
              </p>
              <p>
                <span className="user-address-signature">suite:</span> {suite}
              </p>
              <p>
                <span className="user-address-signature">city:</span> {city}
              </p>
              <p>
                <span className="user-address-signature">zipcode:</span>{' '}
                {zipcode}
              </p>
              <p>
                <span className="user-address-signature">lat/lng:</span> {lat}/
                {lng}
              </p>
            </div>
            <p className="user-phone">
              Phone: <span>{phone}</span>
            </p>
            <a href={website} className="user-website">
              {website}
            </a>
            <div className="user-company">
              <p>Company:</p>
              <p>
                <span className="user-company-signature">name:</span>{' '}
                {companyName}
              </p>
              <p>
                <span className="user-company-signature">catch phrase:</span>{' '}
                {catchPhrase}
              </p>
              <p>
                <span className="user-company-signature">bs:</span> {bs}
              </p>
            </div>
          </div>
        )
      )}
    </section>
  );
}

UsersTab.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.shape({
        street: PropTypes.string,
        suite: PropTypes.string,
        city: PropTypes.string,
        zipcode: PropTypes.string,
        geo: PropTypes.shape({
          lat: PropTypes.string,
          lng: PropTypes.string
        })
      }),
      phone: PropTypes.string,
      website: PropTypes.string,
      company: PropTypes.shape({
        name: PropTypes.string,
        catchPhrase: PropTypes.string,
        bs: PropTypes.string
      })
    })
  )
};

export default UsersTab;
