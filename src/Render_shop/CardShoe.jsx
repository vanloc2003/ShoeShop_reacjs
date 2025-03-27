import React from "react";

const CardShoe = (props) => {
  const { dataItem, setDetailContent } = props;
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={dataItem.image} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {dataItem.name}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {dataItem.shortDescription}
        </p>
        <button
          data-modal-target="static-modal"
          data-modal-toggle="static-modal"
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setDetailContent(dataItem)}
        >
          Chi tiết
        </button>
      </div>
    </div>
  );
};

export default CardShoe;
