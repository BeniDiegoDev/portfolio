import React, {useEffect, useState} from "react";
import NavBarComponent from "../components/nav-bar.component";
import HomeComponent from "../components/home.component";
import LanguageComponent from "../components/language.component";
import ProjectsComponent from "../components/projects.component";
import ExperiencesComponent from "../components/experiences.component";
import ContactComponent from "../components/contact.component";
import BottomBarComponent from "../components/bottom-bar.component";
import LoadingScreenComponent from "../components/loading-screen.component";

function HomePage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    return (
        <>
            {!loading ? (
                <div className="App">
                    <NavBarComponent/>
                    <HomeComponent/>
                    <LanguageComponent/>
                    <ProjectsComponent/>
                    <ExperiencesComponent/>
                    <ContactComponent/>
                    <BottomBarComponent/>
                </div>
            ) : (
                <LoadingScreenComponent/>
            )}
        </>
    );
}

export default HomePage;
