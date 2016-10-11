var React = require("react");

var About = (props) => {
  return(
    <div>
      <h1 className='text-center'>About</h1>
      <p>Do you like Weather? Boy, is this the app for you!</p>
      <p>Here are some of the tools I've used:</p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React</a> - This was
            the JavaScript framework used.
        </li>
        <li>
          <a href='http://openweathermap.org'>Open Weather Map</a> - Open
            Weather Map provides the data by city name.
        </li>
      </ul>
    </div>

  )
};

module.exports = About;
