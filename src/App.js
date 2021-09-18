import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
// import { Cards, CountryPicker } from './components';

import { fetchData } from './api/';
import Navbar from './components/Navbar/Navbar';
import AboutCard from './components/About/AboutCard';
import About1 from './components/About/About1';
import AboutTretment from './components/About/AboutTretment';


// import image from './images/image.png';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;
    // const { data } = this.state;


    return (
      <div>
      <Navbar />
        <About1 />
        {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <center><Chart data={data} country={country} /> </center>
        <AboutCard />
        <AboutTretment />
      </div>
    );
  }
}

export default App;