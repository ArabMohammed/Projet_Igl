import AccountHead from "../Components/AccountHead";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Myads from "../Components/Myads";
import Profil from "../Components/Profil";

function AccountInfo(){
    const userName = "Seddiki Mohamed Houssem Edine";
    return (
        <>
            <Navbar />
            <Profil />
            <Footer />
        </>
    )
}

export default AccountInfo;