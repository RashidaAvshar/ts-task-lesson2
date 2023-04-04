import { Iproduct } from '../../model';
import { CardProps } from './model';

type CardPropsDetail = {
    data: Iproduct
}

const Card = ({data}: CardPropsDetail) => {

  return (
   
<div className="flex justify-center">
  <div
    className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row mt-3">
    <img
      className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-px"
      src={data.image}
      alt="" />
    <div className="flex flex-col justify-start p-6">
      <h5
        className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
        {data.title}
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {data.description}
      </p>
      <p className="text-green-800 dark:text-neutral-300 text-xl font-medium" >
        {data.price} $
      </p>
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Button
      </button>
    </div>
  </div>
</div>
  )
}

export default Card;
