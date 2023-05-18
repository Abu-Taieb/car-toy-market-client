const Blogs = () => {
  return (
    <div className="bg-base-200 px-5">
      <h2 className="text-3xl text-center">Our Blog Pages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <ol>
              <li className="list-decimal">Access Token:</li>
              <p>
                The server verifies the access token to determine if the
                requester has the necessary permissions to perform the requested
                action. If the token is valid and the permissions are
                sufficient, the server responds with the requested resource.
              </p>
              <hr />
              <li className="list-decimal">Refresh Token:</li>
              <p>
                A refresh token is a credential that is used to obtain a new
                access token without requiring the user to reauthenticate. It is
                usually long-lived compared to access tokens.
              </p>
              <li className="list-decimal">
                Storing access tokens and refresh tokens on the client-side
                depends on the specific requirements and security considerations
                of your application. Here are some common approaches.
              </li>
              <li className="list-disc">In memory</li>
              <li className="list-disc">Cookies</li>
              <li className="list-disc">Local storage or session storage</li>
              <li className="list-disc">Secure storage</li>
            </ol>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
            <ol>
              <li className="list-decimal mt-3">SQL Databases:</li>
              <p>
                Structure: SQL databases are based on the relational model and
                use structured query language (SQL) for defining and
                manipulating the data. They have a predefined schema that
                specifies the tables, columns, and relationships between them.
              </p>
              <hr />
              <li className="list-decimal mt-3">NoSQL Databases:</li>
              <p>
                Structure: NoSQL databases use various data models, including
                key-value, document, columnar, and graph. They provide
                flexibility in storing unstructured or semi-structured data.
              </p>
              <hr />
              <li className="list-decimal mt-3">SQL Databases:</li>
              <p>
                Data Integrity: SQL databases enforce data integrity through
                ACID (Atomicity, Consistency, Isolation, Durability) properties,
                ensuring reliable and consistent transactions.
              </p>
              <hr />
              <li className="list-decimal mt-3">NoSQL Databases:</li>
              <p>
                Data Integrity: NoSQL databases often prioritize availability
                and scalability over strict consistency. They may provide
                eventual consistency or tunable consistency models, which
                sacrifice some consistency guarantees for improved performance.
              </p>
            </ol>
            <p>
              Choosing between SQL and NoSQL databases depends on factors such
              as the nature of your data, scalability requirements, consistency
              needs, and the complexity of your data model. SQL databases are
              well-suited for structured and relational data with complex
              querying needs, while NoSQL databases excel in handling large
              amounts of unstructured or semi-structured data with high
              scalability demands.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">What is express js? What is Nest JS?</h2>
            <ol>
              <li className="list-decimal">Express.js:</li>
              <p>
                Express.js is a minimal and flexible Node.js web application
                framework. It provides a set of features and tools for building
                web servers and APIs.
              </p>
              <br />
              <p>
                Express.js is known for its simplicity and lightweight nature.
                It allows developers to handle HTTP requests, define routes, and
                implement middleware functions to process incoming requests and
                responses.
              </p>
              <hr />
              <li className="list-decimal mt-3">NestJS:</li>
              <p>
                NestJS is a full-featured, opinionated framework for building
                scalable and maintainable server-side applications using
                TypeScript. It is built on top of Express.js and enhances it
                with additional features and architectural patterns.
              </p>
              <br />
              <p>
                NestJS follows the modular and component-based architectural
                style. It emphasizes the use of decorators and dependency
                injection to define modules, controllers, services, and other
                components.
              </p>
            </ol>
            <p>
              In summary, Express.js is a lightweight and flexible framework,
              while NestJS is a full-featured and opinionated framework built on
              top of Express.js. Express.js is more suitable for simple projects
              or when you want maximum freedom in structuring your application.
              NestJS is ideal for larger projects or when you prefer a
              structured and modular approach to development with additional
              features and architectural patterns.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              What is MongoDB aggregate and how does it work?
            </h2>
            <ol>
              <p>
                In MongoDB, the aggregate function is used to perform advanced
                data aggregation operations on collections. It allows you to
                process and transform documents within a collection to obtain
                aggregated results based on specified criteria and computations.
                The aggregate function works by defining a pipeline of stages
                that are executed sequentially to process the documents.
              </p>
              <br />
              <li className="list-disc">$match</li>
              <li className="list-disc">$group</li>
              <li className="list-disc">$project</li>
              <li className="list-disc">$sort</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
