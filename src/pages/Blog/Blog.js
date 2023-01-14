import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button fs-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What are the different ways to manage a state in a React
              application?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                There are several other ways to manage state​s in React,
                including the use of: <br /> 1. Hooks. <br /> 2. React Context
                API. <br /> 3. Apollo Link State.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How does prototypical inheritance work?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the of an object,
                we use Object. getPrototypeOf and Object.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is a unit test? Why should we write unit tests?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                A unit test is a way of testing a unit - the smallest piece of
                code that can be logically isolated in a system. In most
                programming languages, that is a function, a subroutine, a
                method or property. The isolated part of the definition is
                important. In his book "Working Effectively with Legacy Code",
                author Michael Feathers states that such tests are not unit
                tests when they rely on external systems: “If it talks to the
                database, it talks across the network, it touches the file
                system, it requires system configuration, or it can't be run at
                the same time as any other test."Modern versions of unit testing
                can be found in frameworks like JUnit, or testing tools like
                TestComplete. Look a little further and you will find SUnit, the
                mother of all unit testing frameworks created by Kent Beck, and
                a reference in chapter 5 of The Art of Software Testing . Before
                that, it's mostly a mystery. I asked Jerry Weinberg about his
                experiences with unit testing -- "We did unit testing in 1956.
                As far as I knew, it was always done, as long as there were
                computers".
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              What is a unit test? Why should we write unit tests?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          ></div>
        </div>
        <div className="accordion-body">
          <p>
            Web developers are always at crossroads where they have to decide
            among a range of development frameworks and choose one for their
            project. It is a common topic of debate among developers on how to
            pick a framework for their next big project. Some frameworks which
            have become the most popular among developers and causing the
            dilemma are ReactJS, VueJS, and Angular. A simple difference between
            these three is that React is a UI library, and Vue is a progressive
            framework. However, Angular is a full-fledged front-end framework.
            As per StackOverflow Survey 2022, React is the favorite framework of
            40.14% of developers, Angular with 22.96%, and Vue with 18.97% of
            developers. This guide focuses on helping you decide which framework
            to pick before starting your next project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
