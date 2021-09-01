import Profile from 'components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from 'components/Statistics/Statictics';
import statisticalData from 'components/Statistics/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from './components/TransactionHistory/transactions.json'

export default function App() {
    return (<div>
        <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <FriendList friends={friends} />
        
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />

        <TransactionHistory items={transactions} />
        
    </div>)
};