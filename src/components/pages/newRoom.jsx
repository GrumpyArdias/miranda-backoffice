import Dropdown from "../Dropdown";

function NewRoom() {
  const options = ["Single Bed", "Double Bed", "Double Superior", "Suite"];

  const handleSelect = (option) => {
    console.log(`Selected option: ${option}`);
  };

  return (
    <form action="">
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
    </form>
  );
}

export default NewRoom;
