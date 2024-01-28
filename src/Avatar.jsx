export default function Avatar(props) {

    const person = props.person;
    const size = props.size;

    return (
        <div>
            <p>{person.name}</p>
            <img
                className="avatar"
                src={"https://i.imgur.com/" + person.imageId + ".jpg"}
                alt={person.name}
                width={size}
                height={size}
            />
      </div>
    );
  }