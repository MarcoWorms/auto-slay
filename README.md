# AutoSlay

A free deckbuilding roguelike featuring automatic combat and critical decisions

## Game Loop

### Phase: Class Selection

Start of the game, player choses the initial class

When player beats the game it unlocks dificulty level modifier and raises it by 1 if it's on the most difficult unlocked

Extra classes unlock after playing once with the previous class, no need to win (maybe reach the first boss)

### Phase: Choosing Stage

A random 2 doors will appear. Doors can be: Combat, Shop, Rest, Event, Combat (Boss)

Game always starts with 1 door: Combat

Every X stage 1 door only: Combat (Boss)

Player wins after beating Y bosses

### Phase: Shop

Player spends gold to buy cards/artifacts

### Phase: Event

Player is faced with random choices (can be good or bad)

### Phase: Rest

Player heals and receive some gold

### Phase: Combat

Player combats agains a random monster. Monster difficulty is determined by the player progression reaching the final room

On win go to "Select Reward"

### Phase: Select Reward

Select 1 out of 3 cards to add to the deck (or skip)
