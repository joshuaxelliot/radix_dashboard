import { Flex, Text, Button, Container, Heading } from "@radix-ui/themes";
import Dashboard from "./components/Dashboard";
import DashHeader from "./components/DashHeader";

function App() {
  return (
    <Container>
      <DashHeader />
      <Dashboard />
    </Container>
  );
}

export default App;







































/*


import Avatar from "./Avatar";
import Heading from "./components/Heading";
import Button from "./components/Button";
import ButtonWithChildren from "./components/ButtonWithChildren";

function TodoList() {

/*
const myStyle = {
  backgroundColor: 'black',
  color: 'pink'
} 
*/

/*

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

export default function App() {

  const buttonTitle = "Click";
  const buttonTitle2 = "Add";

  return (
    <div>
      <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100}/>
      <Heading />
      <TodoList />
      <Button title={buttonTitle}/>
      <Button title={buttonTitle2}/>
      <ButtonWithChildren> hej </ButtonWithChildren>
    </div>

  )
}

*/