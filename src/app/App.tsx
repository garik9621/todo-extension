import {TodoList} from "@widgets/TodoList";
import styled from "styled-components";

const AppWrapperStyled = styled.main`
    min-width: 400px;
    max-width: 400px;
    padding: 8px;
`

function App() {

  return (
    <AppWrapperStyled>
      <TodoList />
    </AppWrapperStyled>
  )
}

export default App
