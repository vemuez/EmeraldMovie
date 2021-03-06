var React = require("react");
var Link = require("react-router").Link;
var Navigation = require("./header/navigation.jsx");

var Header = React.createClass({
  handleLogout: function(e){
    e.preventDefault();
    axios.post("/logout").then(function(data){
      location.href = "/login";
    });
  },
  render: function(){
    //Add drop down list
    //show favourite shows and movies
    //set login expiry date
    //get api from movie database

    return (
      <header className="navbar-fixed">
        <div className="row">
          <nav className="nav-wrapper  blue-grey darken-4">
            <div className="col s12">
              <Link to="/" className="brand-logo">
                <span>Emerald</span>
                <img className="logo" src="http://market.designmodo.com/wp-content/uploads/2015/06/flat-ui-logo.png"/>
              </Link>
              <a href="#" data-activates="navigation" className="button-collapse"><i className="material-icons">menu</i></a>

              <ul className="right hide-on-med-and-down">
                <Navigation/>
              </ul>

              <ul className="side-nav center" id="navigation">
                <Navigation nav={true}/>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
});

module.exports = Header;
