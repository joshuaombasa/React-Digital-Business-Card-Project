import React from "react";

function Main() {
    return (
        <div className="main">
            <div className="initials">
                 <h4>Joshua Ombasa</h4>
                 <p>Frontend Developer</p>
                 <small><a href="devombasa.co.ke">devombasa.co.ke</a></small>
            </div>
            <div className="btn-container">
                <div className="email-container">
                    <i class="fa-solid fa-envelope"></i>
                    <p>Email</p>
                </div>
                <div className="linkedIn-container">
                   <i class="fa-brands fa-linkedin"></i>
                   <p>LinkedIn</p>
                </div>
            </div>
            <div className="about">
                <h4 className="headings">About</h4>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="interests">
                <h4 className="headings">Interests</h4>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}

export default Main