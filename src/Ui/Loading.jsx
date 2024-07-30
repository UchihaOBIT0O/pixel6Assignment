import "ldrs/infinity";

//just a loading spinner from ldrs library will be rendered as a placeholder until the data is fetched from the server

function Loading() {
  return (
    <div className="h-96 flex items-center justify-center z-10">
      <l-infinity
        size="110"
        stroke="5"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="#fd5e51"
      ></l-infinity>
    </div>
  );
}

export default Loading;
