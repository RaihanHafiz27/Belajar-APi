// Komponen popup untuk keranjang kosong
export const EmptyCartPopup = () => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">Your Cart is Empty</h2>
      <p className="mt-4">Please add items to cart before checkout.</p>
    </div>
  );
};
