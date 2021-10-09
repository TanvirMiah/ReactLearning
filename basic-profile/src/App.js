import './App.css';

const user = {
  name: 'Tanvir Miah',
  location: 'UK',
  foodType: 'Curry, Italian, Mexican',
  age: 26,
  likes: 'learning everything in the world',
  twitterUsername: 'tambulla',
  avatar: 'https://pbs.twimg.com/profile_images/1429939992869187590/fXDgYnze_400x400.jpg',
  twitter: 'https://twitter.com/Tambulla'
}

function App() {
  return (
    <div className="App">
      <div className = "user-details">
        <img src={user.avatar} alt={user.name}/>
        
        <h2 className = "name">
          {user.name}
        </h2>

        <h4>
          <strong>Location</strong> 
        </h4>

        <h2>
          {user.location}
        </h2>

        <h4>
          <strong>Eats</strong> 
        </h4>

        <h2>
          {user.foodType}
        </h2>

        <h4>
          <strong>Age</strong>
        </h4>

        <h2>
          {user.age}
        </h2>

        <h4>
          <strong>Likes</strong>
        </h4>

        <h2>
          {user.likes}
        </h2>

        <h4>Twitter</h4> 
        
        <h2>
        <a href={user.twitter}>@{user.twitterUsername}</a>
        </h2>
      </div>
    </div>
  );
}

export default App;
