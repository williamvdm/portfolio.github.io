import React from 'react';

// Assets
import LinkedinLogo from "../assets/svg/linkedin.svg";
import GitLogo from "../assets/svg/github.svg";

function Footer() {
    return (
        <footer className="contact mt-32">
            <div className="flex justify-center space-x-4">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/william-van-der-meijden-554812145/" target="_blank" rel="noreferrer noopener" className="text-blue-500 hover:underline">
                    <img src={LinkedinLogo} alt="Linkedin" title="Linkedin" className="w-10" />
                </a>
                {/* GitHub */}
                <a href="https://github.com/williamvdm" target="_blank" rel="noreferrer noopener" className="text-blue-500 hover:underline">
                    <img src={GitLogo} alt="GitHub" title="GitHub" className="w-10" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
