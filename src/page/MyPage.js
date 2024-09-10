import React, { useEffect, useState } from "react";

const MyPage = () => {
    const [recentPages, setRecentPages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRecentPages = async () => {
        try {
            const response = await fetch("/api/recentpages");
            const data = await response .json();
            setRecentPages(data);
        } catch(error) {
            console.error("Error fetching recent pages:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecentPages();
    }, []);

    return (
        <div className="user-page">
            {/* Left Sidebar Section */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="user-profile">
                        <img src="https://via.placeholder.com/50" alt="User" className="user-image" />
                        <p className="username">UserName</p>
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li><i className="icon-clock"></i>RecentPage</li>
                        <li><i className="icon-bookmark"></i>Bookmark</li>
                        <li><i className="icon-calendar"></i>Calendar</li>
                        <li><i className="icon-chat"></i>1:1 AI CHAT</li>
                        <hr></hr>
                        <li><i className="icon-faq"></i>FAQ</li>
                        <li><i className="icon-settings"></i>Settings</li>
                        <hr></hr>
                        <li><i className="icon-logout"></i>Logout</li>
                    </ul>
                </nav>
            </div>

            {/* Right Sidebar Section*/}
            <div className="right-sidebar">
                <nav className="sidebar-nav">
                    <ul>
                        <li><i className="icon-user"></i>Profile</li>
                        <li><i className="icon-user"></i>Profile</li>
                        <li><i className="icon-user"></i>Profile</li>
                        <li><i className="icon-user"></i>Profile</li>
                    </ul>
                </nav>
            </div>

            {/* Main Section - 최근 방문한 페이지 */}
            <div className="Center-content">
                <h2>최근 방문한 페이지</h2>
                {loading ? (
                    <p>로딩 중...</p> // 데이터 로딩 중일 때 표시
                ) : recentPages.length > 0 ? (
                    <ul className="recent-pages-list">
                        {recentPages.slice(0, 6).map((page, index) => (
                            <li key={index}>{page.title}</li> // 페이지 제목 표시
                        ))}
                    </ul>
                ) : (
                    <p>최근 방문한 페이지가 없습니다.</p>)} </div> </div> );
}

export default MyPage;