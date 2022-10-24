import { format } from "date-fns";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { usersContext } from "../../pages/Users";

export default function UserDisplay() {
  const usersDetails = useContext(usersContext)
  const {pagenum} = useParams()
  const { phone, dob, email, gender, location, nat, name, picture } = usersDetails[pagenum-1]

  return (
    <section className="userDetails" aria-label="user information">
      <header className="detailsHeader">
        <div className="userImage">
          <img src={picture.large} alt="userImage" />
        </div>
        <p className="username">{`${name.title} ${name.first} ${name.last}`}</p>
        <p className="userCity">{`${location.city}, ${location.state}, ${location.country}`}</p>
      </header>
      <section className="userContact">
        <div className="phone" aria-label="phone number">
          <img src='../public/phone.svg' alt="p" />
          <div className="contact">
            <p>MOBILE</p>
            <p>{phone}</p>
          </div>
        </div>
        <div className="email" aria-label="email address">
          <img src='../public/mail.svg' alt="e" />
          <div className="contact">
            <p>EMAIL</p>
            <p>{email}</p>
          </div>
        </div>
      </section>
      <section className="personalInfo">
        <p>
          <span>Gender:</span>{' '}
          {gender}
        </p>
        <p>
          <span>Age:</span>{' '}
          {dob.age}
        </p>
        <p>
          <span>DOB:</span>{' '}
          {dob.date.slice(0,10)}
        </p>
        <p>
          <span>Nationality:</span>{' '}
          {nat}
        </p>
      </section>
    </section>
  );
}
