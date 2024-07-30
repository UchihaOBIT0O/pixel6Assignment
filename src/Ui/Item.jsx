//UI item which takes a user object and then render it as below
function Item({ user }) {
  const {
    id,
    maidenName,
    firstName,
    lastName,
    age,
    gender,
    image,
    address: { state, country },
    company: { title },
  } = user;

  return (
    <div className="grid grid-cols-[1fr_0.5fr_1fr_0.5fr_0.5fr_1fr_1fr]  border-b py-[0.4rem] items-center text-sm">
      <span className="ml-20">{id}</span>
      <span>
        <img
          className="h-[40px] w-[40px] border rounded-full"
          src={image}
          alt="logo"
        />
      </span>
      <span>{`${firstName} ${lastName} ${maidenName}`}</span>
      <span>{gender}</span>
      <span>{age}</span>
      <span>{title}</span>
      <span className="">{`${state}, ${country}`}</span>
    </div>
  );
}

export default Item;
