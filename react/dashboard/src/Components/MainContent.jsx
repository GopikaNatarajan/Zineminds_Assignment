import React, { useState } from 'react';
import './Style.css';
import Navbar from './Navbar';

const records = [
    { id: 1, name: 'John Doe', status: 'Available', phone: '(555) 123-4567', email: 'john.doe@example.com', favorite: true },
    { id: 2, name: 'Jane Doe', status: 'Available', phone: '(555) 987-6543', email: 'jane.doe@example.com', favorite: true },
    { id: 3, name: 'Jane Smith', status: 'Busy', phone: '(555) 987-6543', email: 'jane.smith@example.com', favorite: false },
    { id: 4, name: 'Alice Johnson', status: 'Offline', phone: '(555) 111-2222', email: 'alice.johnson@example.com', favorite: true },
    { id: 5, name: 'Bob Anderson', status: 'Available', phone: '(555) 444-5555', email: 'bob.anderson@example.com', favorite: false },
    { id: 6, name: 'David Brown', status: 'Away', phone: '(555) 777-8888', email: 'david.brown@example.com', favorite: true },
    { id: 7, name: 'Emily Wilson', status: 'Available', phone: '(555) 222-3333', email: 'emily.wilson@example.com', favorite: false },
    { id: 8, name: 'Michael Johnson', status: 'Busy', phone: '(555) 555-1234', email: 'michael.johnson@example.com', favorite: false },
    { id: 9, name: 'Sophia Miller', status: 'Offline', phone: '(555) 999-8888', email: 'sophia.miller@example.com', favorite: true },
    { id: 10, name: 'Daniel Clark', status: 'Available', phone: '(555) 333-4444', email: 'daniel.clark@example.com', favorite: false },
    { id: 11, name: 'Olivia White', status: 'Busy', phone: '(555) 666-7777', email: 'olivia.white@example.com', favorite: true },
    { id: 12, name: 'Mark Thompson', status: 'Away', phone: '(555) 222-3333', email: 'mark.thompson@example.com', favorite: false },
    { id: 13, name: 'Jessica Wilson', status: 'Busy', phone: '(555) 333-4444', email: 'jessica.wilson@example.com', favorite: true },
    { id: 14, name: 'Ryan Davis', status: 'Offline', phone: '(555) 444-5555', email: 'ryan.davis@example.com', favorite: false },
    { id: 15, name: 'Sophie Brown', status: 'Available', phone: '(555) 555-6666', email: 'sophie.brown@example.com', favorite: true },
    { id: 16, name: 'Thomas Garcia', status: 'Busy', phone: '(555) 666-7777', email: 'thomas.garcia@example.com', favorite: false },
    { id: 17, name: 'Grace Martinez', status: 'Away', phone: '(555) 777-8888', email: 'grace.martinez@example.com', favorite: true },
    { id: 18, name: 'Lucas Hernandez', status: 'Available', phone: '(555) 888-9999', email: 'lucas.hernandez@example.com', favorite: false },
    { id: 19, name: 'Sarah Johnson', status: 'Available', phone: '(555) 111-2222', email: 'sarah.johnson@example.com', favorite: true },
    { id: 20, name: 'Ella Lopez', status: 'Offline', phone: '(555) 999-8888', email: 'ella.lopez@example.com', favorite: true },
];

function MainContent() {
    const [items, setItems] = useState(records);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleFavorite = (index) => {
        const updatedItems = [...items];
        updatedItems[index].favorite = !updatedItems[index].favorite;
        setItems(updatedItems);
    };

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className="d-flex">
                {/* Sidebar code */}
            </div>
            <div className="maincontent">
                {/* Main content code */}
                <div className="right-content">
                    <div className="d-flex justify-content-between">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <p className="search-text pt-2 pl-3 pb-2">Search</p>
                        <div className="d-flex pt-3 pr-3">
                            <div>
                                <button className="chat-btn">
                                    <span><i className="fa fa-comment pr-2"></i></span>Chat
                                </button>
                            </div>
                            <div>
                                <button className="call-btn">
                                    <span><i className="fa fa-phone pr-2"></i></span>Call
                                </button>
                            </div>
                            <div className="lsline pl-2">|</div>
                            <div>
                                <i className="heart fa fa-heart pl-2"></i>
                            </div>
                            <div>
                                <i className=" refresh fa fa-rotate-right pl-2 mt-1"></i>
                            </div>
                        </div>
                    </div>
                    <div className="pl-3">Found {filteredItems.length} Users</div>
                    <div className="pt-1 pl-3 input-group input-width mt-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text search-bar">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="form-control search-bar"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                    </div>
                </div>
                <table className="mt-4">
                    <thead>
                        <tr>
                            <th>
                                <label className="container">
                                    <input type="radio" />
                                    <span className="checkmark"></span>
                                    <span className="line pl-3">|</span>
                                </label>
                            </th>
                            <th>
                                Name <div className="fa fa-caret-down"></div>
                                <span className="line pl-3">|</span>
                            </th>
                            <th>
                                Status <div className="fa fa-caret-down"></div>
                                <span className="line pl-3">|</span>
                            </th>
                            <th>
                                Phone Number <div className="fa fa-caret-down"></div>
                                <span className="line pl-3">|</span>
                            </th>
                            <th>
                                Email Id <div className="fa fa-caret-down"></div>
                                <span className="line pl-3">|</span>
                            </th>
                            <th>
                                Favourites <div className="fa fa-caret-down"></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <label className="container">
                                        <input type="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.status}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className="favorite-btn" onClick={() => toggleFavorite(index)}>
                                        <i className={`fa fa-heart ${item.favorite ? 'text-danger' : ''}`}></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MainContent;
