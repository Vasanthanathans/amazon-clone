import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";

function MainLayout({ children }) {
    return (
        <>
            <Header />
            <SubHeader />

            <main>{children}</main>

            <Footer />
        </>
    );
}

export default MainLayout;