import React from 'react';
import './FAQ.css'

const FAQ = () => {
    return (
        <div className='container my-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            How does react work?

                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            React is a javascript library for building frontend interfaces. It encourages the creation of reusable UI components, which present data that changes over time. React abstracts away the DOM from you, offering a simpler programming model and better performance.
                            <br />
                            React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            What are differences between Props vs State?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.
                            <br />
                            State cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            What are the usage of useEffect except api data-loading?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            The useEffect Hook allows you to perform side effects in your components.
                            <br />
                            Except fetching data, other side effects are - directly updating the DOM, and timers.
                            <br />
                            useEffect accepts two arguments. The second argument is optional.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;