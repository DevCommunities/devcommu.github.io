import React from 'react';

export default function NavContainer({ children }: { children: React.ReactNode }) {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-purple-600">
                        <img
                            src="/favicon.svg"
                            alt="logo"
                            style={{ width: '40px', height: '40px' }}
                        />
                    </div>
                </div>
                {children}
            </div>
        </nav>
    );
};

export function NavListContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center space-x-2">
            {children ? children : null}
            <div className="flex space-x-1">
                {/* Assuming you want these to be links */}
                <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium" style={{ transition: 'color 0.3s' }}>หน้าหลัก</a>
                <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium" style={{ transition: 'color 0.3s' }}>โครงการ</a>
                <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium" style={{ transition: 'color 0.3s' }}>สถานะ</a>
                <a href="#" className="text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium" style={{ transition: 'color 0.3s' }}>เกี่ยวกับเรา</a>
            </div>
        </div>
    );
}