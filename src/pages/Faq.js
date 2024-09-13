import React from 'react'
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"

function Faq() {
    return (
        <div>
            <Navbar/>
            <Banner
                text="How can we help?"
                img={("./../../breadcrumb-bg.png")}
                link="FAQ"
            />

            <div className="container mt-5">

                <div className="row">
                    <h5 className='display-6'>Basics</h5>

                    <div className="accordion mt-3" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    What is Freelance Hub all about?
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Freelance hub is easy to use and was created to help people look for job easily and also help
                                    employers hire anyone with specific talent with the purpose of helping each other reach a suitable
                                    and effective goal.
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="accordion mt-3" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="true"
                                    aria-controls="collapseTwo"
                                >
                                    Is my payment information secure? 
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    Yes, Freelance hub takes pleasure in protecting users private information to prevent
                                    fraud and identity theft. 
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Faq