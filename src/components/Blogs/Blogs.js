import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="container text-start blog">
      <h1>Q1.What is Context API?</h1>
      <hr />
      <p>
        <b>Ans: </b>Context API helps passing data through the component tree.
        We don't have to pass props down manually at every level. Context is
        designed to share data which can be considered “global” for a tree of
        React components. There is no need to pass props through intermediate
        elements. When some data needs to be accessible by many components at
        different nesting levels, Context is primarily used there
      </p>
      <p>
        <b>React.createContext : </b>It creates a context object. When React
        renders a component that subscribes to this Context object it will read
        the current context value from the closest matching Provider above it in
        the tree.
      </p>
      <p>
        {" "}
        <b>Context.Provider: </b> The Provider component takes a value 'prop' to
        be passed to consuming components that are descendants of this Provider.
        One Provider can be connected to many consumers.
      </p>

      <h1>Q2. What do you mean by Semantic Tags?</h1>
      <hr />
      <p>
        <b>Ans: </b>A semantic HTML is such element which clearly describes its
        meaning to both the browser and the developer. Elements such as{" "}
        <b>header</b> , <b>footer</b> and <b>article</b> are all considered
        semantic. Because they accurately describe the purpose of the element
        and the type of content that is inside them. Examples of non-semantic
        elements are the <b>div</b> and <b>span</b> tags. These elements tell us
        nothing about its content.
        <p>The semantic elements of HTML are: </p>
        <ul>
          <li>
            <b>article</b>
          </li>
          <li>
            <b>aside</b>
          </li>
          <li>
            <b>details</b>
          </li>
          <li>
            <b>footer</b>
          </li>
          <li>
            <b>figcaption</b>
          </li>
          <li>
            <b>figure</b>
          </li>
          <li>
            <b>header</b>
          </li>
          <li>
            <b>main</b>
          </li>
          <li>
            <b>mark</b>
          </li>
          <li>
            <b>nav</b>
          </li>
          <li>
            <b>section</b>
          </li>
          <li>
            <b>summary</b>
          </li>
          <li>
            <b>time</b>
          </li>
        </ul>
      </p>

      <h1>Q3. What are the differences between Inline and Block elements?</h1>
      <hr />
      <p>
        <b>Ans: </b> There are two display values in HTML. They are block and
        inline. A block-level element starts always on a new line. Browsers
        automatically add a margin before and after the element. Block-level
        elements take up the full width available . Two commonly used block
        elements are: <b>p</b> and <b>div</b>. The <b>p</b> element defines a
        paragraph in an HTML document. The <b>div</b> element defines a division
        or a section in an HTML document.
        <br />
        Examples of block elements:
        <ul>
          <li>
            <b>&lt; div &gt;</b>
          </li>
          <li>
            <b>&lt; p &gt;</b>
          </li>
          <li>
            <b>&lt; table &gt;</b>
          </li>
          <li>
            <b>&lt; footer &gt;</b>
          </li>
          <li>
            <b>&lt; section &gt;</b>
          </li>
        </ul>
        <br />
        On the other hand inline elements do not start on a new line. Inline
        elements only takes up as much width as they need. <br></br>Examples of
        inline elements:
        <ul>
          <li>
            <b>&lt; a &gt;</b>
          </li>
          <li>
            <b>&lt; b &gt;</b>
          </li>
          <li>
            <b>&lt; span &gt;</b>
          </li>
          <li>
            <b>&lt; small &gt;</b>
          </li>
          <li>
            <b>&lt; textarea &gt;</b>
          </li>
          <li>
            <b>&lt; input &gt;</b>
          </li>
          <li>
            <b>&lt; img &gt;</b>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Blogs;
