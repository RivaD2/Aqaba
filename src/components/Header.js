import React from 'react'
import Nav from '../components/Nav';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SearchBar from '../components/SearchBar';
import SearchOutinedIcon from "@material-ui/icons/SearchOutlined";
import SideBar from '../components/SideBar';
import IconButton from "@material-ui/core/IconButton";
import Login from '../components/Login';
import './Header.css';

class Header extends React.Component {
  state = {
    showSearchField: false,
  };
  
  toggleSearchField = () => {
    if(this.state.searchTerm) {
      console.log('searching for something', this.state.searchTerm);
      return;
    }
    this.setState({
      showSearchField: !this.state.showSearchField
    })
  }
  
  onSearchChanged = searchTerm => {
    this.setState({
     searchTerm
    })
  }

  render() {
    return (
      <div className="header">
        <div className="nav-container">
          <div className="link-block" >
            <Nav />
          </div>
          <div className="hamburger">
            <SideBar/>
          </div>
          <div className="title-block">
            AQABA
            <div className="creator-title">by Miriam Mirani</div>
          </div>
          <div className="icon-block">
            {this.state.showSearchField && <SearchBar onSearchChanged={this.onSearchChanged}/>}
            <div className="search-icon">
                <IconButton onClick={this.toggleSearchField}> 
                  <SearchOutinedIcon />
                </IconButton>
              </div>
              <div className="cart-icon">
                <IconButton onClick={this.props.showCart}>
                  <AddShoppingCartOutlinedIcon />
                </IconButton>
              </div>
              <div className="account-icon">
                <div className="login-icon-container">
                  <Login showLoginModal={this.props.showLoginModal}/>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
