import React, {Component} from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

    <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
              {networks}
          </ul>

          <a href="/Home.js">back to Top</a>
          </div>
          <ul className="copyright">
              <li>&copy; Copyright 2021 -</li>
              <li>Design by <a href="Silkyjohnson155">SILKYJOHNSON155</a></li>
          </ul>
    </div>
  </footer>
    );
  }
}

export default Footer;
