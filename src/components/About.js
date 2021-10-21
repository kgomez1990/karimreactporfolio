import React from "react";

export default function About() {
    return (
        <div>
            <div className="px-4 py-5 my-5 text-center">
                <img
                    className="d-block mx-auto mb-4 profileImage"
                    src="../assets/parrot.jpg"
                    alt=""
                />
                <h1 className="display-5 fw-bold">About</h1>
                <div className="col-lg-6 mx-auto">
                    <p>
                        I am a new Full Stack Developer still learning more and more about Technologies as the days go by. I'm interested in workout, fitness, technology and sports.
                    </p>
                </div>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                </div>
            </div>
        </div>
    );
}