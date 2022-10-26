import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1> what is cors?</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that
                    allows a server to indicate any origins (domain, scheme, or port) other than its
                    own from which a browser should permit loading resources. CORS also relies on a
                    mechanism by which browsers make a "preflight" request to the server hosting the
                    cross-origin resource, in order to check that the server will permit the actual request.
                    In that preflight, the browser sends headers that indicate the HTTP method and headers
                    that will be used in the actual request.</p>
            </div>
            <div>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>Firebase Authentication aims to make building secure authentication systems easy,
                    while improving the sign-in and onboarding experience for end users. It provides
                    an end-to-end identity solution, supporting email and password accounts, phone auth,
                    and Google, Twitter, Facebook, and GitHub login, and more.</p>
            </div>
            <div>
                <h1>How does the private route work?</h1>
                <p>The private route component is similar to the public route, the only change is
                    that redirect URL and authenticate condition. If the user is not authenticated
                    he will be redirected to the login page and the user can only access the
                    authenticated routes If he is authenticated (Logged in).</p>
            </div>
        </div>
    );
};

export default Blog;