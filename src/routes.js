import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

// Containers
import Full from './containers/Full/'
//import Simple from './containers/Simple/'

import Charts from './views/Charts/'
import Dashboard from './views/Dashboard/'

// Components
import Buttons from './views/Components/Buttons/'
import Cards from './views/Components/Cards/'
import Modals from './views/Components/Modals/'
import SocialButtons from './views/Components/SocialButtons/'
import Switches from './views/Components/Switches/'
import Tables from './views/Components/Tables/'
import Tabs from './views/Components/Tabs/'

// Forms
import BasicForms from './views/Forms/BasicForms/'
import AdvancedForms from './views/Forms/AdvancedForms'

// Icons
// import FontAwesome from './views/Icons/FontAwesome/'
// import Glyphicons from './views/Icons/Glyphicons/'
// import GlyphiconsFiletypes from './views/Icons/GlyphiconsFiletypes/'
// import GlyphiconsSocial from './views/Icons/GlyphiconsSocial/'
// import SimpleLineIcons from './views/Icons/SimpleLineIcons/'

// Plugins
import LoadingButtons from './views/Plugins/LoadingButtons/'
import Spinners from './views/Plugins/Spinners/'

// Pages
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

import Widgets from './views/Widgets/'

//Shop
import ManageShop from './views/Shop/ManageShop/'

// Auth
import CheckAuth from './components/Auth/CheckAuth'
import Signin from './components/Auth/Signin'
import Signout from './components/Auth/Signout'

export default (
  <Router >
    <Route path='/signin' component={Signin} />
    <Route path='/signout' component={Signout} />

    <Route path="/" name="Home" component={CheckAuth(Full)}>
      <IndexRoute component={Dashboard} />

      <Route path="dashboard" name="Dashboard" component={Dashboard} />

      {/********************* BEGIN SHOP *********************/}
      <Route path="shop" name="shop">
        <IndexRoute component={ManageShop} />
        <Route path="manageshop" name="Manage Shop" component={ManageShop} />
      </Route>
      {/********************* END SHOP *********************/}

      {/********************* BEGIN SKU *********************/}
      <Route path="sku" name="SKU">
        <IndexRoute component={Dashboard} />
        <Route path="mangesku" name="Manage SKU" component={Dashboard} />
      </Route>
      {/********************* END SKU *********************/}

      {/********************* BEGIN ROLES *********************/}
      <Route path="roles" name="ROLES">
        <IndexRoute component={Dashboard} />
        <Route path="mangeroles" name="Manage Roles" component={Dashboard} />
      </Route>
      {/********************* END SKU *********************/}


      <Route path="components" name="Components">
        <IndexRoute component={Buttons} />
        <Route path="buttons" name="Buttons" component={Buttons} />
        <Route path="cards" name="Cards" component={Cards} />
        <Route path="modals" name="Modals" component={Modals} />
        <Route path="social-buttons" name="Social Buttons" component={SocialButtons} />
        <Route path="switches" name="Swithces" component={Switches} />
        <Route path="tables" name="Tables" component={Tables} />
        <Route path="tabs" name="Tabs" component={Tabs} />
      </Route>

      <Route path="forms" name="Forms">
        <IndexRoute component={BasicForms} />
        <Route path="basic-forms" name="Basic Forms" component={BasicForms} />
        <Route path="advanced-forms" name="Advanced Forms" component={AdvancedForms} />
      </Route>

      <Route path="plugins" name="Plugins">
        <IndexRoute component={LoadingButtons} />
        <Route path="loading-buttons" name="Loading Buttons" component={LoadingButtons} />
        <Route path="spinners" name="Loading Buttons" component={Spinners} />
      </Route>
      <Route path="widgets" name="Widgets" component={Widgets} />
      <Route path="charts" name="Charts" component={Charts} />
    </Route>

    <Route path="pages" name="Pages">
      <IndexRoute component={Login} />
      <Route path="login" name="Login Page" component={Login} />
      <Route path="register" name="Register Page" component={Register} />
      <Route path="page404" name="Page404 Page" component={Page404} />
      <Route path="page500" name="Page500 Page" component={Page500} />
    </Route>

  </Router>
);
