
import HeroSection from "../components/section/HeroSection"
import NavButton from "../components/buttons/NavButton.jsx";
function About() {
    return (
        <main>
            <HeroSection headTittle={"Zoomrocket"}
                secondText={"Zoomrocket is a product development studio"}
                secondBody={"that helps you build high-quality products and apps"}

                firstNavButton={<NavButton
                    variant={"contained"}
                    buttonText={"Home"}
                    href={"/"}


                />}
            />
        </main>
    )
}

export default About