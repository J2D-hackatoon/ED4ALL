interface Props {
  selectedDistrict: {
    value: number;
    label: string;
  };
  centersData: any;
}

export const CenterDetails = ({
  selectedDistrict,
  centersData,
}: Props): JSX.Element => {
  console.log('selectedDistrict', selectedDistrict);
  console.log('centersData', centersData);

  const centers = centersData.filter(
    center => center.district_code === selectedDistrict.value,
  );

  console.log('centers', centers);

  return (
    <div>
      <p>{selectedDistrict.value}</p>
      <p></p>
    </div>
  );
};
