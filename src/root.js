import React, { Suspense, lazy, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Context from './context';
import Store from './store';
import FormReducer from './reducers/form';
import Header from './components/common/header';
import Footer from './components/common/footer';
import { LoaderFullScreen } from './components/common/stub/loader';
import NotFound from './components/sections/404';

const IndexPage = lazy(() => import('./components/routes/index-page'));
const TermsAndConditionsPage = lazy(() => import('./components/routes/terms/terms-and-conditions'));
const TermsOfUse = lazy(() => import('./components/routes/terms/terms-of-use'));
const Feedback = lazy(() => import('./components/routes/feedback'));

function Root() {
  const [store, dispatch] = useReducer(FormReducer, Store);
  return (
    <Suspense fallback={<LoaderFullScreen />}>
      <Context.Provider
        value={{
          store,
          dispatch,
        }}
      >
        <Router>
          <Header />
          <Switch>
            <Route path='/' component={IndexPage} exact />
            <Route path='/termsAndConditions' component={TermsAndConditionsPage} />
            <Route path='/terms' component={TermsOfUse} />
            <Route path='/contact' component={Feedback} />
            <Route path='/back-money' component={Feedback} />
            <Route path='*' component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Context.Provider>
    </Suspense>
  );
}

export default Root;
