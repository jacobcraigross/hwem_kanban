import Header from './compo/Header';
import FeedbackList from './compo/FeedbackList';
import FeedbackStats from './compo/FeedbackStats';
import FeedbackForm from './compo/FeedbackForm';
import About from './pages/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutIconLink from './compo/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext';

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route // ----- ROUTE ONE -----
                            exact path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        >
                        </Route>
                        <Route // ----- ROUTE TWO -----
                            path="/about"
                            element={<About/>}
                        />
                    </Routes>
                    <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;