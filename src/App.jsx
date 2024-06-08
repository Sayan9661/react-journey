import { useState } from "react";

// demo code/component for deisplaying data using JSX-----
const user = {
  name: "Some Random Woman",
  url: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.url}
        alt={"photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
  );
}
// ---------

// rendering lists of components-----

// array of objects
const products = [
  { title: "smartphone", isGadget: true, id: 1 },
  { title: "TV", isGadget: true, id: 2 },
  { title: "soap", isGadget: false, id: 3 },
];
// now to render as list
const productList = products.map((obj) => (
  // Notice how <li> has a *key* attribute.
  // For each item in a list, you should pass
  // a string or a number that uniquely identifies that item among its siblings.
  // Usually, a key should be coming from your data, such as a database ID.
  // React uses your keys to know what happened if you later insert, delete, or reorder the items.
  <li
    key={obj.id}
    style={{
      color: obj.isGadget ? "red" : "blue",
    }}
  >
    {obj.title}
  </li>
));

function ShoppingList() {
  return <ul>{productList}</ul>;
}

// ------

// react components have to have caps for 1st letter
// eslint-disable-next-line react/prop-types
function MyButton({ count, onClick }) {
  // if we use the state inside the component each component has its own state

  // // declare a state variable inside your component
  // const [count, setCount] = useState(0);

  // // event handler for button
  // function handleClick() {

  //   setCount(count + 1);
  // }

  return (
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={onClick}
    >
      Click Me!! {count}
    </button>
  );
}

// this is the main function
// Your component also can’t return multiple JSX tags.
// You have to wrap them into a shared parent, like a < div >...</div > or an empty <>...</> wrapper
function App() {
  const [count, setCount] = useState(0);

  // event handler for button
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to my app!!!</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <Profile />
      <ShoppingList />
    </>
  );
}

// The export default keywords specify the main component in the file
export default App;
