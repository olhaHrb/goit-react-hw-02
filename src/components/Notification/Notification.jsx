const Notification = ({ total }) => {
  if (total === 0) {
    return (
      <div>
        <p>No feedback yet</p>
      </div>
    );
  }
};

export default Notification;
