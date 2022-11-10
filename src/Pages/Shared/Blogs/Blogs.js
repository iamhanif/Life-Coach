import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold m-5'> Q1: Difference between SQL and NoSQL </h1>
            <p className='mx-8'> <strong>Answer:</strong> Prerequisites – SQL, NoSQL
                When it comes to choosing a database the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both the databases are viable options still there are certain key differences between the two that users must keep in mind when making a decision.
                <br />
                The Main Differences:
                <br />
                Type –
                SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
                <br />

                Language –
                SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. </p>

            <br />
            <br />
            <h1 className='text-2xl font-semibold m-5'>Q2: What is JWT, and how does it work?</h1>
            <p className='mx-8'> <strong>Answer:</strong> What is JSON Web Token?
                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. <br />

                Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.

            </p>
            <br />
            <br />
            <h1 className='text-2xl font-semibold m-5'>
                Q3: What is the difference between javascript and NodeJS?
            </h1>
            <p className='mx-8'> <strong>Answer:</strong>
                1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />

                2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
            </p>
            <br />
            <br />
            <h1 className='text-2xl font-semibold m-5'> Q4: How does NodeJS handle multiple requests at the same time?</h1>
            <p className='mx-8'> <strong>Answer:</strong>
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
            </p>
        </div>
    );
};

export default Blogs;