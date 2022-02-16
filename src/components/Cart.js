import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, clearCart, decreaseCartQty, getTotal, removeFromCart } from "../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shipping = 30;
  const tax = (15 / 100) * cart.cartTotalPrice;
  const taxIndex = 15;

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleIncreaseCartQty = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecreaseCartQty = (item) => {
    dispatch(decreaseCartQty(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg ">
      <div className="md:flex ">
        <div className="w-full p-4 px-5 py-5">
          <div className="lg:grid lg:grid-cols-3 gap-2 ">
            <div className="col-span-2 p-5">
              <h1 className="text-xl font-medium ">Shopping Cart</h1>
              {cart.cartItems.length === 0 ? (
                <div className="flex items-center">
                  <p>Your cart is empty</p>
                  <i className="fa fa-arrow-left text-sm pr-2"></i> <span className="text-md font-medium text-blue-500">Start shopping</span>
                </div>
              ) : (
                <>
                  {cart.cartItems?.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mt-6 pt-6">
                      <div className="flex items-center">
                        <img src={item.image} className="w-1/4 md:block hidden" alt={item.title} />
                        <div className="flex flex-col ml-3">
                          <span className="md:text-md font-medium">{item.title}</span>
                          <span className="text-md font-bold">${item.price}</span>
                          <span className="text-xs font-light text-gray-400">{item.category}</span>
                          <button type="button" onClick={() => handleRemoveFromCart(item)} className="text-sm  ">
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="pr-8 flex ">
                          <button onClick={() => handleDecreaseCartQty(item)} className="font-semibold">
                            -
                          </button>
                          <span className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2">{item.cartQty}</span>
                          <button onClick={() => handleIncreaseCartQty(item)} className="font-semibold">
                            +
                          </button>
                        </div>
                        <span className="text-md font-medium">${(item.price * item.cartQty).toFixed(2).replace(/(\.0+|0+)$/, "")}</span>
                      </div>
                    </div>
                  ))}
                </>
              )}
              <div className="flex justify-between items-center mt-6 pt-6 border-t">
                <div className="flex items-center">
                  <i className="fa fa-arrow-left text-sm pr-2"></i> <span className="text-md font-medium text-blue-500">Continue Shopping</span>
                </div>
                <div className="flex justify-center items-center">
                  <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                  <span className="text-lg font-bold text-gray-800 ">${cart.cartTotalPrice.toFixed(2).replace(/(\.0+|0+)$/, "")}</span>
                </div>
                <button onClick={() => handleClearCart()} className="text-sm font-medium text-gray-400 mr-1">
                  Clear Cart
                </button>
              </div>
            </div>
            <div className=" p-2 bg-gray-200 rounded overflow-visible">
              <div className="w-full h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                  <div>
                    <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none text-gray-800">Subtotal</p>
                      <p className="text-base leading-none text-gray-800">${cart.cartTotalPrice.toFixed(2).replace(/(\.0+|0+)$/, "")}</p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">Shipping</p>
                      <p className="text-base leading-none text-gray-800">${shipping}</p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">Tax</p>
                      <p className="text-base leading-none text-gray-800">{taxIndex}%</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl leading-normal text-gray-800">Total</p>
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800">${(cart.cartTotalPrice + shipping + tax).toFixed(2).replace(/(\.0+|0+)$/, "")}</p>
                    </div>
                    <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
