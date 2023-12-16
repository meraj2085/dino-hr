import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }: any) => {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-white rounded-lg shadow-lg">
      <Image
        src={service?.image_url}
        width={1000}
        height={1000}
        alt="Service image"
      />

      <div className="flex-grow flex flex-col px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800">
          {service?.title}
        </h1>
        <p className="py-2 text-gray-700 font-semibold">{service?.name}</p>
        <p className="text-gray-700 font-semibold">
          Price: <span className="font-normal">${service?.price}</span>
        </p>
        <p className="py-2 text-gray-700 font-semibold">
          <span className="font-normal">
            {(service?.description).slice(0, 180)}...
          </span>
        </p>
        <div className="flex-grow"></div>
        <div className="button_part flex justify-end">
          <Link href={`/services/details/${service?._id}`}>
            <p className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#8B8BCF]">
              See details
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
