import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Header, Sidebar, Timeline } from '../common';
import {useFirebaseUser} from '../../hooks';
import {LoggedInUserContext} from '../contexts';

export default function Dashboard({ user: loggedInUser }) {
  const { user, setActiveUser } = useFirebaseUser(loggedInUser.uid);
  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div className="bg-gray-background">
        <Header />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        {/* <Timeline /> */}
          <Sidebar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};
