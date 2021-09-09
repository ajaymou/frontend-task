import carImg from "./images/car.jpg";
import Form from "./components/formComponents/Form";
import Hr from "./components/Hr";
import Header from "./components/headerComponent/Header";
import Logo from "./components/Logo";

function App() {
  return (  
    <div class="flex flex-wrap w-full">
      <div class="flex flex-col w-full px-6 md:w-1/2 md:px-0 md:m-100 lg:px-12 lg:w-2/5 ">
        <Logo />
        <div class="flex flex-col md:px-6 md:my-4">
          <Header />
          <Hr/>
          <Form />
        </div>
      </div>
      <div class="lg:w-3/5 md:w-1/2 shadow-2xl">
        <img class="hidden w-full h-screen md:block" src={carImg} alt="car" />
      </div>
    </div>
  );
}

export default App;
