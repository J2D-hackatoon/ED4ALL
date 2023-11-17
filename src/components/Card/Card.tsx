
interface Props {
  imageRoute: string;
  districtName: string;
}
const Card = ({ imageRoute, districtName }: Props) => {
  return (
    <div className='card w-56 bg-base-100 shadow-xl'>
      <figure>
        <img src={imageRoute} alt={districtName} loading='lazy' />
      </figure>
      <div className='card-body justify-center items-center'>
        <h2 className='card-title truncate'>{districtName}</h2>
      </div>
    </div>
  );
};

export default Card;
