import React, { useState } from 'react';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import './UserFAQ.css';

const FAQPage = () => {
    const [faqData, setFaqData] = useState([
        { no: 1, category: '숙소예약', title: '여기 홈페이지 숙소예약 방법', date: '2024-09-01' },
        { no: 2, category: '여행정보', title: '제주도 필수 여행지 가이드', date: '2024-08-20' },
        { no: 3, category: '레스토랑', title: '서울 최고의 맛집 소개', date: '2024-08-22' },
        { no: 4, category: '투어추천', title: '가을 단풍 명소 TOP 5', date: '2024-09-05' },
        { no: 5, category: '축제정보', title: '2024년 전국 축제 일정', date: '2024-09-10' },
        { no: 6, category: '교통정보', title: '서울 교통편 완벽 가이드', date: '2024-09-15' }
    ]);

    const [isWriting, setIsWriting] = useState(false);
    const [newFaq, setNewFaq] = useState({ category: '', title: '', date: '' });

    const handleWriteClick = () => {
        setIsWriting(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewFaq({ ...newFaq, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFaqEntry = {
            no: faqData.length + 1,
            category: newFaq.category,
            title: newFaq.title,
            date: new Date().toISOString().split('T')[0] // 현재 날짜 설정
        };
        setFaqData([...faqData, newFaqEntry ]); // 최신 글이 상단에 오도록 추가
        setNewFaq({ category: '', title: '', date: '' });
        setIsWriting(false);
    };

    return (
        <div className="User-FAQ-Page">
            <UserNavbar />
            <div className='User-FAQ-container'>
                <div className="User-FAQ-title">
                    <h1 className='User-FAQ-title-text'>FAQ</h1>
                </div>
                <div className='User-FAQ-write-box-button'>
                <button onClick={handleWriteClick} className="User-FAQ-write-button">글쓰기</button>
                </div>
                {isWriting && (
                    <form onSubmit={handleSubmit} className="User-FAQ-form">
                        <div>
                            <label>카테고리</label>
                            <input
                                type="text"
                                name="category"
                                value={newFaq.category}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>제목</label>
                            <input
                                type="text"
                                name="title"
                                value={newFaq.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="User-FAQ-submit-button">등록</button>
                    </form>
                )}

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
