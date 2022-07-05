import Directory from "./Components/Directory/Directory";
function App() {
  const categories=[
    {
      id: 1,
      type: 'Hats',
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      type: 'Jackets',
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      type: 'Shoes',
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      type: 'Womens',
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      type: 'Mens',
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    },

  ]
  return (
    <Directory categories={categories}/>
  );
}

export default App;
