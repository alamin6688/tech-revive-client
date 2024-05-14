

const BookedServiceRow = ({booking}) => {

    const {serviceName,serviceImage,date,price,providerName} = booking

    return (
        <tr className="text-[16px]">
        <td>
          <div className="avatar">
            <div className="rounded w-12 h-12">
              {<img src={serviceImage} alt="Service Image" />}
            </div>
          </div>
        </td>
        <td>{serviceName}</td>
        <td>{providerName}</td>
        <td>{date}</td>
        <td>$ {price}</td>
      </tr>
    );
};

export default BookedServiceRow;