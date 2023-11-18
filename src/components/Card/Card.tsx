
interface Props {
  imageRoute: string;
  districtName: string;
}
const Card = ({ imageRoute, districtName }: Props): JSX.Element => {
  return (
    <div className='card w-56 bg-base-100 shadow-xl'>
      <figure>
        <img src={imageRoute} alt={districtName} loading='lazy' />
      </figure>
      <div className='card-body justify-center items-center'>
        <h3 className='card-title truncate'>Distrito:{districtName}</h3>

      </div>
    </div>
  );
};

export default Card;
