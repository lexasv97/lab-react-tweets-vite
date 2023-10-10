export const ProfileImage = (props) => {
    console.log(props)
    return (
      <img
      src={props.image}
      className="profile"
      alt="profile"
    />
    )
  }