import './users-tab.css';

import React from 'react';

function UsersTab({ users }) {
  return (
    <section>
      {users &&
        users.map(
          ({
            id,
            name,
            username,
            email,
            address: {
              street,
              suite,
              city,
              zipcode,
              geo: { lat, lng }
            }
          }) => (
            <div className="user" key={id}>
              <h2 className="user-name">{name}</h2>
              <p className="user-username">{username}</p>
              <p className="user-email">{email}</p>
              <div className="user-address">
                <p>
                  <span className="user-address-signature">street:</span>{' '}
                  {street}
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
                  <span className="user-address-signature">lat/lng:</span> {lat}
                  /{lng}
                </p>
              </div>
            </div>
          )
        )}
    </section>
  );
}

export default UsersTab;
