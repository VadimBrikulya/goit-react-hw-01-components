
import Layout from '../src/Components/Layout/Layout';

import Profile from '../src/Components/Profile/Profile';
import user from './data/user.json';

import Statistics from '../src/Components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendList from '../src/Components/FriendList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from '../src/Components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <Layout>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Layout>
  );
};
export default App;