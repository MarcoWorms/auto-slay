import React, { useReducer } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, ul, li, h1, h2, h3, h4, h5, p {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const StyledApp = styled.div`
  display: flex;
`;

const Container = styled.div`
  padding: 0 20px;

  h1,
  h2 {
    text-align: center;
    margin: 30px 0px;
  }
`;

const LineBreak = styled.div`
  width: 100%;
  border-bottom: solid 1px #ddd;
  margin-top: 40px;
`;

const SideBar = styled(Container)`
  min-width: 300px;
  max-width: 300px;
  border-right: solid 1px #ddd;
  overflow-y: auto;
  /* border-bottom: solid 1px #ddd; */

  li {
    margin: 10px 0px;
  }
  li > p {
    margin-top: 5px;
    margin-bottom: 15px;
    margin-left: 15px;
  }
`;

const ContentBar = styled(Container)`
  min-width: 500px;
  width: calc(100vw - 300px);
`;

const HorizontalChoice = styled.ul`
  display: flex;
  justify-content: space-around;

  li {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 250px;
  }

  img {
    padding: 10px;
    margin-bottom: 10px;
    height: 128px;
  }

  button {
    padding: 10px;
    margin: 0 10px;
  }
`;

const initialState = {
  phase: "class selection"
  // phase: "choosing stage"
  // phase: "combat"
  // phase: "shop"
  // phase: "event"
  // phase: "select reward"
};

const newGame = () => ({
  phase: "choosing stage",
  health: { current: 50, max: 50 },
  gold: 0,
  artifacts: [
    {
      name: "Warrior's Hearth",
      description: "After the end of every combat heals for 5 health points",
      endOfCombat: {
        healSelf: 5
      }
    }
  ],
  deck: [
    {
      amount: 1,
      name: "Warrior Shout",
      description: "Deals 6 damage to all enemies",
      action: {
        damageAllEnemies: 6
      }
    },
    {
      amount: 1,
      name: "Strike",
      description: "Deals 4 damage to a random enemy",
      action: {
        damageRandomEnemy: 4
      }
    },
    {
      amount: 1,
      name: "Block",
      description: "Blocks 4 damage",
      action: {
        blockSelf: 4
      }
    }
  ]
});

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "new game":
      return newGame();
    case "combat":
      return {
        ...state,
        phase: "combat"
      };
    case "shop":
      return {
        ...state,
        phase: "shop"
      };
    case "event":
      return {
        ...state,
        phase: "event"
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StyledApp>
      <GlobalStyle />
      <SideBar>
        <LineBreak />
        <h1>AutoSlay 0.1</h1>
        <LineBreak />
        <h2>Health: {state.health && "50/50"}</h2>
        <h2>Gold: {state.gold && 0}</h2>
        <LineBreak />
        <h1>Artifacts</h1>
        {state.artifacts && (
          <ul>
            <li>
              <b>Warrior's Hearth</b>
              <p>After the end of every combat heals for 5 health points</p>
            </li>
          </ul>
        )}
        <LineBreak />
        <h1>Deck</h1>
        {state.deck && (
          <ul>
            <li>
              <b>1 x Warrior Shout</b>
              <p>Deals 6 damage to all enemies</p>
            </li>
            <li>
              <b>5 x Strike</b>
              <p>Deals 4 damage to a random enemy</p>
            </li>
            <li>
              <b>5 x Block</b>
              <p>Blocks 4 damage</p>
            </li>
          </ul>
        )}
        <LineBreak />
      </SideBar>
      <ContentBar>
        {state.phase === "class selection" && <h1>Choose a champion:</h1>}
        {state.phase === "class selection" && (
          <HorizontalChoice>
            <li>
              <h2>Warrior</h2>
              <img src="images/visored-helm.svg" />
              <button onClick={() => dispatch({ type: "new game" })}>
                Select
              </button>
            </li>
            <li>
              <h2>Ninja</h2>
              <img src="images/ninja-head.svg" />
              <button disabled>Not Available</button>
            </li>
            <li>
              <h2>Wizard</h2>
              <img src="images/cowled.svg" />
              <button disabled>Not Available</button>
            </li>
          </HorizontalChoice>
        )}
        {state.phase === "choosing stage" && <h1>Choose a door:</h1>}
        {state.phase === "choosing stage" && (
          <div>
            <HorizontalChoice>
              <li>
                <h2>Combat</h2>
                <img src="images/door-combat.svg" />
                <button onClick={() => dispatch({ type: "combat" })}>
                  Select
                </button>
              </li>
              <li>
                <h2>Shop</h2>
                <img src="images/door-shop.svg" />
                <button onClick={() => dispatch({ type: "shop" })}>
                  Select
                </button>
              </li>
              <li>
                <h2>Event</h2>
                <img src="images/door-event.svg" />
                <button onClick={() => dispatch({ type: "event" })}>
                  Select
                </button>
              </li>
            </HorizontalChoice>
          </div>
        )}
        {state.phase === "combat" && <h1>Combat</h1>}
        {state.phase === "shop" && <h1>Shop</h1>}
        {state.phase === "event" && <h1>Event</h1>}
        {state.phase === "select reward" && <h1>Select Reward</h1>}
      </ContentBar>
    </StyledApp>
  );
}
