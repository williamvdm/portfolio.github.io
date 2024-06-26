import React from "react";

// Layouts
// import Nav from "../../layouts/nav.js";
import Footer from "../../layouts/footer.js";

// Components
// import Notify from "../../components/notify.js";

// Assets
import Me from "../../assets/me.png";
import ReactLogo from "../../assets/svg/react.svg";
import TailwindLogo from "../../assets/svg/tailwind.svg";
import PythonLogo from "../../assets/svg/python.svg";
import CsharpLogo from "../../assets/svg/csharp.svg";
import JavascriptLogo from "../../assets/svg/javascript.svg";
import SqlLogo from "../../assets/svg/sql.svg";
import LaravelLogo from "../../assets/svg/laravel.svg";
import WordpressLogo from "../../assets/svg/wordpress.svg";
import SassLogo from "../../assets/svg/sass.svg";
import VueLogo from "../../assets/svg/vue.svg";

import BackgroundImage from "../../assets/docs-dark@30.1a9f8cbf.avif";

function Home() {
    return (
        <>
        <div className="flex justify-center bg-white dark:bg-darkblue min-h-screen p-8 text-black dark:text-gray-200"  style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="container mx-auto 2xl:w-1/3">
                {/* <Notify /> */}
                {/* <Nav /> */}
                <header className="mt-12 p-8 flex mx-auto flex-col xl:flex-row items-center justify-center rounded" role="banner">
                    <img className="rounded-full w-52 mb-4 xl:mb-0 xl:mr-12 self-center" src={Me} alt="Portrait of William" />
                    <div className="text-center xl:text-left">
                        <h1 className="text-6xl font-bold">Hello, I'm William.</h1>
                        <p className="text-3xl">I am a front- and back-end developer with 1+ years of experience.</p>
                    </div>
                </header>
                <main role="main">
                    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-8 mt-8" aria-label="Technology logos">
                        <div className="bg-ghost dark:bg-ebonyclay rounded-2xl p-4 flex justify-center items-center">
                            <img className="min-w-12 w-12" src={ReactLogo} alt="React JS logo" title="React JS" />
                        </div>
                        <div className="bg-ghost dark:bg-ebonyclay rounded-2xl p-4 flex justify-center items-center">
                            <img className="min-w-12 w-12" src={TailwindLogo} alt="Tailwind CSS logo" title="Tailwind CSS" />
                        </div>
                        <div className="bg-ghost dark:bg-ebonyclay rounded-2xl p-4 flex justify-center items-center">
                            <img className="min-w-12 w-12" src={JavascriptLogo} alt="JavaScript logo" title="JavaScript" />
                        </div>
                        <div className="bg-ghost dark:bg-ebonyclay rounded-2xl p-4 flex justify-center items-center">
                            <img className="min-w-12 w-12" src={PythonLogo} alt="Python logo" title="Python" />
                        </div>
                        <div className="bg-ghost dark:bg-ebonyclay rounded-2xl p-4 flex justify-center items-center">
                            <img className="min-w-12 w-12" src={CsharpLogo} alt="C Sharp logo" title="C Sharp" />
                        </div>
                        <div className="bg-ghost dark:bg-ebonyclay rounded-2xl p-4 flex justify-center items-center">
                            <img className="min-w-12 w-12" src={SqlLogo} alt="SQL logo" title="MSSQL" />
                        </div>
                    </section>
                    <section className="about mt-14" aria-labelledby="about-heading">
                        <h2 id="about-heading" className="text-3xl font-bold mb-4">About Me</h2>
                        <p className="text-lg mb-4">
                            I enjoy building responsive and user-friendly web applications that solve real-world problems. I am constantly learning and exploring new technologies to enhance my skills and stay up-to-date with industry trends.
                        </p>
                        <a href="mailto:williamvdm@live.nl" className="block bg-azure dark:bg-azure rounded-2xl p-4 text-center text-white dark:text-white text-xl font-bold" role="button" aria-label="Contact me">
                            Contact me!
                        </a>
                    </section>
                    <section className="projects mt-14" aria-labelledby="projects-heading">
                        <h2 id="projects-heading" className="text-3xl font-bold mb-4">Projects</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Project 1 */}
                            <a href="https://www.meijmat.nl" target="_blank" rel="noreferrer noopener" className="block bg-ghost dark:bg-ebonyclay rounded-2xl p-8 flex flex-col h-full hover:scale-105 ease-in-out duration-300" aria-label="Meijmat BV project">
                                <h3 className="text-2xl mb-4">Meijmat BV</h3>
                                <p>
                                    Meijmat, a transportation company, had an outdated website from 2010.
                                    I created a new one for them using WordPress and provided guides to help them make changes themselves.
                                </p>
                                <div className="mt-8 flex space-x-2">
                                    <img src={WordpressLogo} alt="WordPress logo" title="WordPress" className="w-6" />
                                </div>
                            </a>
                            {/* Project 2 */}
                            <div className="bg-ghost dark:bg-ebonyclay rounded-2xl p-8 flex flex-col h-full hover:scale-105 ease-in-out duration-300" aria-label="FTSF webshop project">
                                <h3 className="text-2xl mb-4">FTSF webshop</h3>
                                <p>
                                    During the development of the webshop, my responsibilities included setting up the Front-End structure and converting the design to views.
                                    These were then made functional in the Vue.js framework.
                                </p>
                                <div className="mt-8 flex space-x-2">
                                    <img src={VueLogo} alt="Vue.js logo" title="Vue.js" className="w-6" />
                                    <img src={LaravelLogo} alt="Laravel logo" title="Laravel" className="w-6" />
                                    <img src={SassLogo} alt="Sass logo" title="Sass" className="w-6" />
                                </div>
                            </div>
                            {/* Project 3 */}
                            <a href="https://www.competa.com" target="_blank" rel="noreferrer noopener" className="block bg-ghost dark:bg-ebonyclay rounded-2xl p-8 flex flex-col h-full hover:scale-105 ease-in-out duration-300" aria-label="Competa IT project">
                                <h3 className="text-2xl mb-4">Competa IT</h3>
                                <p>
                                    In revising the Competa website, I was responsible for converting the design into a WordPress compatible theme.
                                    Browser compatibility, user experience and responsiveness were a high priority.
                                </p>
                                <div className="mt-8 flex space-x-2">
                                    <img src={WordpressLogo} alt="WordPress logo" title="WordPress" className="w-6" />
                                </div>
                            </a>
                            {/* Project 4 */}
                            <div className="bg-ghost dark:bg-ebonyclay rounded-2xl p-8 flex flex-col h-full hover:scale-105 ease-in-out duration-300" aria-label="My portfolio project">
                                <h3 className="text-2xl mb-4">My portfolio</h3>
                                <p>
                                    I used Tailwind CSS, JavaScript, and React to make my new portfolio website. I kept it simple and made everything from scratch.
                                    Making sure it looks good on different devices was really important while I was working on it.
                                </p>
                                <div className="mt-8 flex space-x-2">
                                    <img src={TailwindLogo} alt="Tailwind CSS logo" title="Tailwind CSS" className="w-6" />
                                    <img src={ReactLogo} alt="React JS logo" title="React JS" className="w-6" />
                                    <img src={JavascriptLogo} alt="JavaScript logo" title="JavaScript" className="w-6" />
                                </div>
                            </div>
                            <a href="https://github.com/williamvdm" target="_blank" rel="noreferrer noopener" className="block bg-azure dark:bg-azure rounded-2xl p-4 text-center text-white dark:text-white text-xl font-bold" role="button" aria-label="View more on GitHub">
                                View more on GitHub
                            </a>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
        </>
    );
}

export default Home;
