import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-6 md:p-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div>
          <h5 className="font-bold mb-2">Curriculum</h5>
          <p className="text-sm">SEBA & ASHEC</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Board</h5>
          <p className="text-sm">Missionary education board</p>
          <p className="text-sm">With address details</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">School Address</h5>
          <p className="text-sm">Office Timing</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Quick Links</h5>
          <ul className="text-sm space-y-1">
            <li><a href="#link1" className="hover:underline">Link 1</a></li>
            <li><a href="#link2" className="hover:underline">Link 2</a></li>
            <li><a href="#link3" className="hover:underline">Link 3</a></li>
            <li><a href="#link4" className="hover:underline">Link 4</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">This site is developed by Sankar & Rahul</h5>
          <p className="text-sm">© 2024 Cyber Solutions</p>
          <p className="text-sm"><a href="#" className="hover:underline">www.xyz.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
