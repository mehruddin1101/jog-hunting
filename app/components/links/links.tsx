import React from 'react';

const Links = () => {
  return (
    <div>
      <div style={{ height: '70vh', backgroundColor: 'white', marginTop: '20px', marginLeft: '5px', maxWidth: '300px', borderRadius: '10px' }}>
      </div>

      <div style={{ height: '30vh', backgroundColor: 'white', marginTop: '20px', marginLeft: '5px', maxWidth: '300px', borderRadius: '10px' }}>
      </div>
      <div style={{ height: '20vh', backgroundColor: 'white', marginTop: '20px', marginLeft: '5px', maxWidth: '300px', borderRadius: '10px' }}>
      </div>
      <div style={{ height: '40vh', backgroundColor: 'white', marginTop: '20px', marginLeft: '5px', maxWidth: '300px', borderRadius: '10px' }}>
        <a href="#" className="block mb-2">Link 1</a>
        <a href="#" className="block mb-2">Link 2</a>
        <a href="#" className="block mb-2">Link 3</a>
        <a href="#" className="block mb-2">Link 4</a>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Links;

