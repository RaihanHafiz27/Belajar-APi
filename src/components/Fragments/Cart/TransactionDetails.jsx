export const TransactionDetails = (props) => {
  const {
    handleApplyVoucher,
    totalHarga,
    selectedDelivery,
    costDamage,
    voucherDiscount,
    totalAmount,
    handleCheckout,
  } = props;
  return (
    <div className="flex flex-col items-center justify-center py-2 mt-2 bg-white rounded-md 2xl:py-4 lg:mt-0 lg:w-1/4 2xl:w-1/5 font-Roboto">
      <div className="w-11/12 py-1 bg-gray-200 rounded-lg">
        <h2 className="font-semibold text-center">Transaction Details</h2>
      </div>
      <div className="flex-grow w-11/12">
        <div className="py-2 border-b border-gray-600 border-dashed lg:py-2 2xl:py-4">
          <div className="flex justify-between lg:text-sm 2xl:text-base">
            <p className="">Transaction Code</p>
            <p className="">JQ4B75F</p>
          </div>
          <form
            onSubmit={handleApplyVoucher}
            className="flex justify-between my-1 lg:text-sm"
          >
            <input
              type="text"
              name="voucher"
              placeholder="COUPON CODE"
              className="w-3/5 py-1 pl-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-1/3 text-orange-500 bg-orange-200 rounded-md"
            >
              Apply
            </button>
          </form>
        </div>
        <div className="py-2 border-b border-gray-600 border-dashed lg:pt-2 lg:text-sm 2xl:text-base">
          <div className="flex justify-between mb-1">
            <p className="">Order Summary</p>
            <p className="">$ {totalHarga}</p>
          </div>
          <div className="flex justify-between mb-1">
            <p className="">Delivery</p>
            <p className="">$ {selectedDelivery}</p>
          </div>
          <div className="flex justify-between mb-1">
            <p className="">Cost Damage</p>
            <p className="">$ {costDamage}</p>
          </div>
          <div className="flex justify-between mb-1">
            <p className="">Voucher Discount</p>
            <p className="">$ {voucherDiscount}</p>
          </div>
          <div className="flex justify-between mb-1">
            <p className="">Total Amount</p>
            <p className="">$ {totalAmount}</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full pt-2 2xl:pt-4">
          <button
            className="w-1/2 py-1 bg-orange-300 rounded-md hover:bg-orange-400"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
