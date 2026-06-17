function Header({ userData }) {
  return (
    <div className="top">
      <div className="top-left">
        <div className="profile">
          <img
            src="https://i.ibb.co/2RsStH3/blue-circle-with-white-user-78370-4707.avif"
            alt="profile"
          />

          <div className="info">
            <h1>{userData.fullName}</h1>

            <h2>{userData.collegeName} Student</h2>

            <p>{userData.location}</p>

            <p>{userData.emailID}</p>

            <p>{userData.contactNumber}</p>
          </div>
        </div>
      </div>

      <div className="top-right">
        <div className="description">{userData.tagline}</div>
      </div>
    </div>
  );
}

export default Header;