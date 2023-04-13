import Dropdown from "../Dropdown";

function NewBooking() {
  const options = ["Single Bed", "Double Bed", "Double Superior", "Suite"];

  const handleSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  console.log(currentDate);

  return (
    <form action="">
      <div className="fullName">
        <label>Full Name</label>
        <br />
        <input type="text" id="full_name" name="full_name" required />
      </div>
      <div className="Date">
        <label>Date</label>
        <br />
        <input type="date" id="date" name="date" min={currentDate} required />
      </div>
      <div className="Check_in">
        <label>Check In </label>
        <br />
        <input
          type="date"
          id="check_in"
          name="check_in"
          min={currentDate}
          required
        />
      </div>
      <div className="Check_out">
        <label>Check Out </label>
        <br />
        <input
          type="date"
          id="check_out"
          name="check_Out"
          min={currentDate}
          required
        />
      </div>
      <div className="Special_request">
        <label>Special Request</label>
        <br />
        <input
          type="text"
          id="check_out"
          name="check_Out"
          minLength="0"
          maxLength="512"
          size="512"
          required
        />
      </div>
      <div className="Room_type">
        <label> Room Type</label>
        <br />
        <input type="radio" id="single" name="sigle" />
        <label htmlFor="single">Single</label>
        <input type="radio" id="double" name="double" />
        <label htmlFor="double">Double</label>
        <input type="radio" id="doubleSuperior" name="doubleSuperior" />
        <label htmlFor="doubleSuperior">Double Superior</label>
        <input type="radio" id="suite" name="suite" />
        <label htmlFor="suite">Suite</label>
      </div>
      <div className="Status">
        <label htmlFor="status">Status</label>
        <input type="radio" id="booking" name="booking" />
        <label htmlFor="booking">Booking</label>
        <input type="radio" id="InProgress" name="booking" />
        <label htmlFor="booking">Booking</label>
        <br />
      </div>
    </form>
  );
}

export default NewBooking;
