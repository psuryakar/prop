import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropertyListPage from './pages/PropertyListPage';
import PostPropertyPage from './pages/PostPropertyPage';
import PropertyManagementPage from './pages/PropertyManagementPage';
import Header from './pages/Header';

function App() {
    return (
        <Router>

            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Real Estate App</Link>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/post-property">Post Property</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={PropertyListPage} />
                    <Route path="/post-property" component={PostPropertyPage} />
                    <Route path="/prop" component={PropertyManagementPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
