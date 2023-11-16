import { useDistricts } from '../../utils/hooks/useDistricts';

const Indicator = ({ districtCode }): JSX.Element => {
  const { data } = useDistricts();
  const educationalOccupationalRanking = data?.find(
    district => district.district_code === districtCode,
  );
  const indicator =
    100 - educationalOccupationalRanking.educational_occupational_ranking;
  let colour = '';

  if (indicator <= 33) {
    colour = 'success';
  } else if (indicator <= 66) {
    colour = 'warning';
  } else {
    colour = 'error';
  }

  console.log(colour);

  return (
    <div>
      <div className={`stats bg-${colour} text-primary-content`}>
        <div className='stat'>
          <div className='stat-title'>Riesgo de exclusión educativa</div>
          <div className='stat-value'>{indicator}%</div>
        </div>
      </div>
    </div>
  );
};

export default Indicator;
