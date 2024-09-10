import React from 'react';
import '../styles/User.css';

const User = () => {
    return (
        <div className="user-page">
           
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="user-profile">
                        <img src="https://via.placeholder.com/50" alt="User" className="user-image" />
                        <p className="username">UserName</p>
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li><i className="icon-clock"></i>Reservation</li>
                        <li><i className="icon-bookmark"></i>Bookmark</li>
                        <li><i className="icon-calendar"></i>Calendar</li>
                        <li><i className="icon-chat"></i>1:1 AI CHAT</li>
                        <li><i className="icon-faq"></i>FAQ</li>
                        <li><i className="icon-settings"></i>Settings</li>
                        <li><i className="icon-logout"></i>Logout</li>
                    </ul>
                </nav>
            </div>

          
            <div className="calendar-content">
                <div className="calendar-section">
                    <h2>JUNE</h2>
                    <table className="calendar">
                        <thead>
                            <tr>
                                <th>SUN</th>
                                <th>MON</th>
                                <th>TUE</th>
                                <th>WED</th>
                                <th>THU</th>
                                <th>FRI</th>
                                <th>SAT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="sunday">2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td className="saturday">1</td>
                            </tr>
                            <tr>
                                <td className="sunday">9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td>13</td>
                                <td>14</td>
                                <td className="saturday">15</td>
                            </tr>
                            <tr>
                                <td className="sunday">16</td>
                                <td>17</td>
                                <td>18</td>
                                <td>19</td>
                                <td>20</td>
                                <td>21</td>
                                <td className="saturday">22</td>
                            </tr>
                            <tr>
                                <td className="sunday">23</td>
                                <td>24</td>
                                <td className="selected">25</td>
                                <td>26</td>
                                <td>27</td>
                                <td>28</td>
                                <td className="saturday">29</td>
                            </tr>
                            <tr>
                                <td className="sunday">30</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="info-section">
                    <div className="profile-placeholder"></div>
                    <div className="info-details">
                        <div className="info-item"></div>
                        <div className="info-item"></div>
                    </div>
                </div>
        </div>
    );
};

export default User;
