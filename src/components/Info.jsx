/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const styles = {
  textAlign: 'center',
  color: 'white',
  border: '3px double rgb(12, 184, 232)',
  borderWidth: '50%',
  borderRadius: '15px',
  borderSpacing: '15px',
  padding: '15px',
  margin: 'auto',
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '65%',
};

const Info = (props) => {
  let display;
  // eslint-disable-next-line react/prop-types
  const { zipCode } = props;
  if (zipCode) {
    display = zipCode.map((e) => (
      <div key={uuidv4()}>
        <ol style={styles}>
          <li>
            City:
            {e.city}
          </li>
          <li>
            State:
            {e.state}
          </li>
          <li>
            Country:
            {e.country}
          </li>
        </ol>
      </div>
    ));
  } else {
    display = <></>;
  }
  return (
    <div>
      <div>{display}</div>
    </div>
  );
};

export default Info;
