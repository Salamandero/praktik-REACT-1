import PropTypes from 'prop-types';

const User = ({ user: { name, email, id }, deleteUser }) => {
  return (
    <li>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={() => deleteUser(id)}>Delete</button>
    </li>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default User;
