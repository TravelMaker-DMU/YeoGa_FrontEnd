import React from 'react';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import './UserFAQ.css';
import Searchicon from  '../../images/icon/icons8-search-50.png';

const FAQPage = () => {
    const faqData = [
        { no: 1, category: '숙소예약', title: '여기 홈페이지 숙소예약 방법', date: '2024-09-01' },
        { no: 2, category: '여행정보', title: '제주도 필수 여행지 가이드', date: '2024-08-20' },
        { no: 3, category: '레스토랑', title: '서울 최고의 맛집 소개', date: '2024-08-22' },
        { no: 4, category: '투어추천', title: '가을 단풍 명소 TOP 5', date: '2024-09-05' },
        { no: 5, category: '축제정보', title: '2024년 전국 축제 일정', date: '	2024-09-10' },
        { no: 6, category: '교통정보', title: '서울 교통편 완벽 가이드', date: '2024-09-15'}
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

            </div>
           
        </div>
    );
};

export default FAQPage;
