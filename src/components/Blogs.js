import React from 'react';

const Blogs = () => {
    return (
        <main className='about'>
            <div className='pg-header'>
                <div className='container'>
                    <h1>Blogs</h1>
                </div>
            </div>
            <div className='container content'>
                <div className='row'>
                    <div className='col-lg-4 text-light'>
                        <h2>What is context API:</h2>
                        <p>The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.</p>
                        <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                            Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
                    </div>
                    <div className='col-lg-4 text-light'>
                        <h2>Semantic Tags:</h2>
                        <p>"Semantic HTML tags are tags that define the meaning of the content they contain."</p>
                        <p>"For example, tags like header, article, and footer are semantic HTML tags. They clearly indicate the role of the content they contain."</p>
                        <p>"On the other hand, tags like div and span are typical examples of non-semantic HTML elements. They serve only as content holders but give no indication as to what type of content they contain or what role that content plays on the page.</p>
                        <p><strong>For sighted users, it’s easy to identify the various parts of a webpage. Headers, footers, and the main content are all immediately visually apparent.

                            However, it is not that easy for users who are blind or visually impaired and rely on screen readers.</strong></p>
                    </div>
                    <div className='col-lg-4 text-light'>
                        <h2>Inline block or Inline block element:</h2>
                        <p>There are two display values: block and inline
                            A block-level element always starts on a new line and takes up the full width available
                            An inline element does not start on a new line and it only takes up as much width as necessary
                            The div element is a block-level and is often used as a container for other HTML elements
                            The span element is an inline container used to mark up a part of a text, or a part of a document</p>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default Blogs;