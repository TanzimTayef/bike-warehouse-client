import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Blogs = () => {
  return (
    <div>
      <div className="">
        <div className="container mx-auto my-16 px-16">
          <div className="mb-16 w-3/4">
            <h1 className="mb-1 font-semibold text-2xl text-white border-b w-3/5 bg-yellow-500 py-2 px-4">
              Question No: 1
            </h1>
            <h4 className=" text-xl mb-2">
              Defferent between javascript and node js?
            </h4>
            <p>
              Javascript is a programming language. but node js not a programing
              language. Node.js is a javascript run time. Javascript run is web
              browser. Javascripts normally used for web application , any
              verification and business logic. All web browser have a javascript
              enggin that have use to run in a web browser. But node js using
              directly javascript V8 engin to some library and to some I/O
              networking operation. Node js help to use javascript from outside
              of the browser for creating, witing and updating and some backed
              server.
            </p>
          </div>
          <div className="mb-16 w-3/4">
            <h1 className="mb-1 font-semibold text-2xl text-white border-b w-3/5 bg-yellow-500 py-2 px-4">
              Question No: 2
            </h1>
            <h4 className=" text-xl mb-2">
              When should you use node.js and when should you us mongodb?
            </h4>
            <p>
              {" "}
              Node.js and mongodb they are totalily different. Mongodb is a
              database system. We can saved document in here and can operation
              like create, update,read, delete. When need to save your document
              we use mongo db. Any project need to programing environment and
              runtime for compiled your code. Node.js we you use for make
              prograaming environment and to communication with database. node
              .js and mongodb totally different technology. They use for
              different purpose.
            </p>
          </div>
          <div className="mb-16 w-3/4">
            <h1 className="mb-1 font-semibold text-2xl text-white border-b w-3/5 bg-yellow-500 py-2 px-4">
              Question No: 3
            </h1>
            <h4 className=" text-xl mb-2">
              Differences between sql and NoSql databases?
            </h4>
            <p>
              {" "}
              Need to saved our document we using database. There have tow
              database system sql and nosql. Sql database are relatinona. Nosql
              database non-relational. Sqls database is use in structured query
              language . NoSql database no structured language. Sql database
              predefined schema . NoSql have diynamic schema for unstructured
              data. Sql database is vertically scalable NoSql data is
              horigentali scalable. Sql database is table-based sql database
              better for multi row transaction . NoSql data are better for
              unstructurd data like document and json.
            </p>
          </div>
          <div className="mb-16 w-3/4">
            <h1 className="mb-1 font-semibold text-2xl text-white border-b w-3/5 bg-yellow-500 py-2 px-4">
              Question No: 2
            </h1>
            <h4 className=" text-xl mb-2">
            What is the purpose of jwt and how does it work
            </h4>
            <p>
              {" "}
              Json web token is open standard. It compact and self-contained way for securly transmitting information. This information verified and trusted because it is digitally signed. It using a secret or  public privet key pair using RSA or ECDSA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
