import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null;


    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
            if (authUser) {
                const userRef = await createUserProfile(authUser);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    })
                })
            } else {
                setCurrentUser(authUser)
            }

        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path={'/'} component={HomePage} />
                    <Route path={'/shop'} component={ShopPage} />
                    <Route exact path={'/checkout'} component={CheckoutPage} />
                    <Route exact path={'/signin'} render={
                        () => this.props.currentUser ? <Redirect to='/shop' /> :
                            <SignInAndSignUpPage />} />
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
