
import HeroSection from "../components/section/HeroSection"
import NavButton from "../components/buttons/NavButton.jsx";
const Home = () => {
    return (
        <main>
            <HeroSection headTittle={"Build Your SaaS modules"}
                secondText={" Integrate with dev environment"}
                secondBody={"Integrate with your dev environment easily, so you can start testing it. Just choose which stack you use and follow our guide"}

                firstNavButton={<NavButton
                    variant={"contained"}
                    buttonText={"Build"}
                    href={"builder"}


                />}

                secondNavButton={<NavButton
                    variant={"outlined"}
                    buttonText={"About us"}
                    href={"about"}
                />}
            />
        </main>
    )
}

export default Home