// Routing.js used to route pages (imported by App.js )
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Landing pages
import Login from "./global_components/Login/LoginPage";
import Register from "./global_components/Register/Register";

//Global
import RefrencePage from "./views/Global/RefrencePage/RefrencePage";

// This is for testing only
import Test from "./global_components/Test/Test";

// MISC Pages
import Profile from "./global_components/Profile/Profile";

// Admin view pages imports
import AdminHome from "./views/Admin/pages/Home/Home";

// Parent view pages imports
import ParentHome from "./views/Parent/pages/Home/Home";

// Parent Create Story imports
import CreateStoryHome from "./views/Parent/pages/CreateStory/CreateStoryHome/CreateStoryHome";
import UserDetails from "./views/Parent/pages/CreateStory/UserDetails/UserDetails.jsx";
import CreateBookPage from "./views/Parent/pages/CreateStory/CreateBook/CreateBook";

// Parent Story Library
import StoryLibraryHome from "./views/Parent/pages/StoryLibrary/StoryLibraryHome/StoryLibraryHome";
import StorySelection from "./views/Parent/pages/StoryLibrary/StorySelection/StorySelection";
import StoryPage from "./views/Parent/pages/StoryLibrary/StoryPage/StoryPage";
import BookSettingsPage from "./views/Parent/pages/StoryLibrary/Settings/Settings";
import BookView from "./views/Parent/pages/StoryLibrary/BookView/BookView";
import SavedStories from "./views/Parent/pages/StoryLibrary/SavedStories/SavedStories";
import SavedStoriesSettings from "./views/Parent/pages/StoryLibrary/SavedStories/SavedStoryEdit.jsx";
import SavedBookView from "./views/Parent/pages/StoryLibrary/SavedStories/SaveBookView.jsx";
import StoryMadeTest from "./views/Parent/pages/StoryMadeTest/StoryMadeTest.jsx";

//PECS Libary
import PecsLib from "./views/Parent/pages/PECS/PECSLib/pecsLib";

const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Pages */}
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/reference" element={<RefrencePage />}></Route>

        {/* MISC Pages */}
        <Route exact path="/Profile" element={<Profile />} />

        {/* TESTING ONLY 
        <Route exact path="/Test" element={<Test />}></Route> */}

        {/* Admin View Pages*/}
        <Route exact path="/admin/home" element={<AdminHome />} />

        {/* Parent View Pages*/}
        <Route exact path="/parent/home" element={<ParentHome />} />

        {/*Create Story */}
        <Route
          exact
          path="/parent/create-story/"
          element={<CreateStoryHome />}
        />

        <Route
          exact
          path="/parent/create-story/user-details"
          element={<UserDetails />}
        />

        <Route
          exact
          path="/parent/create-story/create-book"
          element={<CreateBookPage />}
        />

        {/*Story library*/}
        <Route
          exact
          path="/parent/story-library/"
          element={<StoryLibraryHome />}
        />

        <Route
          exact
          path="/parent/story-library/story-selection"
          element={<StorySelection />}
        />

        <Route
          exact
          path="/parent/story-library/category/:category"
          element={<StoryPage />}
        />

        <Route
          exact
          path="/parent/story-library/settings"
          element={<BookSettingsPage />}
        />
        <Route
          exact
          path="/parent/story-library/bookview"
          element={<BookView />}
        />
        <Route
          exact
          path="/parent/story-library/SavedStories"
          element={<SavedStories />}
        />

        <Route
          exact
          path="/parent/story-library/SavedBookSettings/"
          element={<SavedStoriesSettings />}
        />

        <Route
          exact
          path="/parent/story-library/SaveBookview"
          element={<SavedBookView />}
        />

        {/* PECS Libary*/}
        <Route
          exact
          path="/parent/PECS/pec-libary/pec-selection"
          element={<PecsLib />}
        />

        {/* Story Made Test*/}
        <Route exact path="/parent/StoryMadeTest" element={<StoryMadeTest />} />
      </Routes>
    </Router>
  );
};

export default Routing;
