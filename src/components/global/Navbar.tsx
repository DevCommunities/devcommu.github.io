import React from 'react';

function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-purple-600">
                        {/* Your logo here */}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex space-x-4">
                        {/* Assuming you want these to be links */}
                        <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium" style={{ transition: 'color 0.3s' }}>หน้าหลัก</a>
                        <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium" style={{ transition: 'color 0.3s' }}>โครงการ</a>
                        <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium" style={{ transition: 'color 0.3s' }}>สถานะ</a>
                        <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium" style={{ transition: 'color 0.3s' }}>เกี่ยวกับเรา</a>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium" style={{ transition: 'background-color 0.3s' }}>เข้าสู่ระบบ</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
