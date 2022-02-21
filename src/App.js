import "./App.css";
import Buttons from "./components/test components/test";
import Form from "./components/formulaire/Form";
import VidsnImages from "./components/vids&images/testo";
import Profile from "./profile/profile";
import Car from "./components/cars/car";
import Navbar from "./components/navbar/navbar";
import Cards from "./components/cards/cards";

function App() {
  const handleClick = (model) => alert(model);
  const cardStuff = [
    {
      title: "image 1",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      title: "image 2",
      image:
        "https://www.gettyimages.fr/gi-resources/images/500px/983794168.jpg",
    },
    {
      title: "image 3",
      image:
        "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=",
    },
    {
      title: "image 4",
      image:
        "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      title: "image 5",
      image:
        "https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-1.jpg",
    },
    {
      title: "image 6",
      image:
        "https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073__480.jpg",
    },
  ];
  const navbarStuff = [
    { item: "About us" },
    { item: "Career" },
    {
      item: "departments",
      dropdown: [
        "Marketing & PR",
        "Customer Sucess & Sales",
        "IT,Product,Data",
        "Finance & Administration",
        "HR & More",
      ],
    },
  ];

  return (
    <div className="App">
      <Navbar navbarStuff={navbarStuff} />
      <h1> ----------------------------------------------------- </h1>

      <Cards cardStuff={cardStuff} />

      <h1> ----------------------------------------------------- </h1>
      <h1 style={{ color: "red", fontFamily: "cursive" }}> testing ground </h1>
      <h1> ----------------------------------------------------- </h1>
      <Buttons />
      <h1> ----------------------------------------------------- </h1>
      <Form />
      <h1> ----------------------------------------------------- </h1>
      <VidsnImages />
      <h1> ----------------------------------------------------- </h1>
      <Profile />
      <h1> ----------------------------------------------------- </h1>
      <Car handleClick={handleClick} />
    </div>
  );
}

export default App;
