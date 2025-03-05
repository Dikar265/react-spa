import Banner from "./Banner/Banner";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header />
      <Banner
        h1={'GO fitness'}
        p={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, reiciendis pariatur sequi tempore ipsam obcaecati voluptatem consequatur dolorum! Facilis quam dolores ratione laborum quis repudiandae, aut eum tempore dolorem tenetur'}
        button1={'Lets go'}
        button2={'Explore'}
      />
    </>
  );
}

export default App;
