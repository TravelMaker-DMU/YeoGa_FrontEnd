import React from "react";
import Header from "./Header";

const MainLayout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-4">{children}</main>
            {/* <Footer /> */}
        </div>
    );
}

export default MainLayout;