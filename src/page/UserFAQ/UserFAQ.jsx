import React from 'react';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import './UserFAQ.css';
import Searchicon from  '../../images/icon/icons8-search-50.png';

const FAQPage = () => {
    const faqData = [
        { no: 1, category: '숙소예약', title: '여기 홈페이지 숙소예약 방법', date: '2024-09-01' },
        { no: 2, category: '숙소예약', title: '여기 홈페이지 숙소예약 방법', date: '2024-09-01' },
        { no: 3, category: '숙소예약', title: '여기 홈페이지 숙소예약 방법', date: '2024-09-01' },
        { no: 4, category: '숙소예약', title: '여기 홈페이지 숙소예약 방법', date: '2024-09-01' },
        { no: 5, category: '숙소예약', title: '여기 홈페이지 숙소예약 방법', date: '2024-09-01' },
        { no: 6, category: '숙소예약', title: '여기 홈페이지 숙소예약 방법', date: '2024-09-01'}
    ];

    return (    
        <div className="User-FAQ-Page">
            <UserNavbar/>
            <div className='User-FAQ-container'>
            <div className="User-FAQ-title">
                <h1 className='User-FAQ-title-text'>FAQ</h1>
            </div>
            <div className="FAQ-table">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>카테고리</th>
                            <th>제목</th>
                            <th>작성일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {faqData.map((faq, index) => (
                            <tr key={index}>
                                <td>{faq.no}</td>
                                <td>{faq.category}</td>
                                <td>{faq.title}</td>
                                <td>{faq.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='User-FAQ-Search-container'>
                <div className='User-FAQ'>
                    <img src={Searchicon} className='User-FAQ-Search-icon' ></img>
             <form className='User-FAQ-Search-form'>
               <input type='text'
                className='User-FAQ-Search-text'
                placeholder="검색해보세요" ></input>
             </form>  
            </div>
            </div>
            </div>
            <div className="User-FAQ-right-section">
                <div className="faq-right-placeholder">
                    <div className="image-placeholder">
                        {/* This is a placeholder for the image */}
                    </div>
                    <div className="text-placeholder">
                        {/* Placeholder for any additional information */}
                    </div>
                    <div className="extra-placeholder">
                        {/* Placeholder for extra sections or widgets */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
