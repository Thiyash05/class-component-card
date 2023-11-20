import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Print from './Class1';
import Message from './Message';
import Count from './Count';
import Colorchange from './Colorchange';
import Card from './Classcard';

function App() {
  const person=[
    {
      name:"Raj",
      age:21,
      profession:"Desiginer"
    },

    {
      name:"Madhan",
      age:24,
      profession:"Coder"
    },

    {
      name:"Santhiya",
      age:20,
      profession:"Desiginer"
    },

    {
      name:"Arun",
      age:25,
      profession:"Desiginer"
    }
  ]



  const food=[
    {
      name:"Pav Bhaji",
      place:"Maharashtra",
      rating:4.4,
      price:200,
      line:"Pav bhaji, there is something for everybody on the streets of Mumbai."
    },

    {
      name:"Pongal",
      place:"Tamil Nadu",
      rating:4.4,
      price:200,
      line:"This is a staple meal during every auspicious festival of Tamil Nadu."
    },

    {
      name:"Fish Carry",
      place:"Goa",
      rating:4.2,
      price:250,
      line:"The Goan fish curry or the Xitti Kodi is the staple diet of every Goan"
    },

    {
      name:"Tunday kebabs",
      place:"Uttar Pradesh",
      rating:4.3,
      price:100,
      line:"The tender Tunday kebabs of Lucknow are famous for their savoury and melt in your mouth flavour.."
    },

    {
      name:"Momos",
      place:"Sikkim",
      rating:4.4,
      price:200,
      line:"Sikkim is the place that is going to serve you the best momos you'll ever taste in your life."
    },

    {
      name:"Bisi Bele Bath",
      place:"Karnataka",
      rating:4.3,
      price:340,
      line:"Bisi Bele Bath is a traditional recipe of Karnataka that is prepared in every Kannadiga's home."
    },

    {
      name:"Thukpa",
      place:"Arunachal Pradesh",
      rating:4.3,
      price:180,
      line:"Thukpa is a kind of noodle soup of Tibetan origin that has found its way to being one of the most loved food in Sikkim."
    },

    {
      name:"Dal bati churma",
      place:"Rajasthan",
      rating:4.1,
      price:180,
      line:"Dal bati churma is synonymous to Rajasthan; known for its crunchy batis, dipped in ghee along with spicy daal and sweet churma."
    },

    {
      name:"Hyderabadi Biryani",
      place:"Telangana",
      rating:4.4,
      price:320,
      line:" Hyderabadi Biryani has come to be known worldwide as one of India’s jeweled food items."
    }
  ]
  
  return (
     <div className="App">
        <Table userData={person} />

        <h1>The elephant is a big animal</h1>
        <Print name="Rose" />

        <Message />

        <Count />

        <Colorchange />

        <Card foodDetail={food}/>
     </div>
  );
}

export default App;
