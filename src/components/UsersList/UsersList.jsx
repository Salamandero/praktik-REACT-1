import PropTypes from 'prop-types';
import User from '../User/User';

const UsersList = ({ users, deleteUser }) => {
  return users.map(user => (
    <User deleteUser={deleteUser} key={user.id} user={user} />
  ));
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default UsersList;
