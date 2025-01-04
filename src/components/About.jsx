import React from "react";
import AboutImg from '../assets/images/bout.jpg';
import ViewMyWorkBtn from "./ViewMyWorkBtn";


function About(){
    return(
        <div className="bg-dark text-light py-5" id="about">
            <div className="container">
                <div className="flex-column-reverse flex-md-row row">
                    <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
                        <img className="image-fluid w-75 shadow" src={AboutImg} alt="" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-5">About Me</h2>
                        <p className="text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo blanditiis quos pariatur excepturi incidunt, provident numquam officia aliquam atque sapiente commodi velit, quam autem expedita ratione sequi, iste at?
                        </p>
                        <p className="text-start mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo blanditiis quos pariatur excepturi incidunt, provident numquam officia aliquam atque sapiente commodi velit, quam autem expedita ratione sequi, iste at?
                        </p>
                        <ViewMyWorkBtn/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;