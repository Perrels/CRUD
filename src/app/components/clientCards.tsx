import Link from "next/link";

const ClientCards = () => {
  return (
    <div className="card w-full bg-primary text-primary-content">
      <div className="card-body">
        <div className="flex gap-12 mb-3 items-center">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <h2 className="card-title">Card title!</h2>
        </div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link className="btn " href="/details/clientdetails/2">
            Saiba mais...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientCards;
