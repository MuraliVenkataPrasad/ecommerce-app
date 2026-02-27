import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

const Payment = () => {
  const { getCartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy payment processing
    alert(`Payment of $${getCartTotal()} processed successfully!`);
    clearCart();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-light text-gray-900 tracking-tight">
            Complete your payment
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Secure checkout • Your data is protected
          </p>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Order summary section */}
          <div className="bg-gray-50 px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-gray-500">Total amount</span>
              <span className="text-2xl font-light text-gray-900">${getCartTotal()}</span>
            </div>
          </div>

          {/* Payment form */}
          <div className="px-6 py-6 sm:p-8">
            <form onSubmit={handleSubmit}>
              {/* Payment method selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Payment method</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card option */}
                  <label
                    className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                      paymentMethod === 'card'
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'card'
                          ? 'border-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {paymentMethod === 'card' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                        )}
                      </div>
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">Credit / Debit Card</span>
                    </div>
                  </label>

                  {/* PayPal option */}
                  <label
                    className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                      paymentMethod === 'paypal'
                        ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        paymentMethod === 'paypal'
                          ? 'border-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {paymentMethod === 'paypal' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                        )}
                      </div>
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">PayPal</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Card details */}
              {paymentMethod === 'card' && (
                <div className="space-y-5 transition-all duration-300">
                  <div>
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                      Card number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                        required
                        className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry date
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="expiry"
                          placeholder="MM/YY"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                          required
                          className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="cvc"
                          placeholder="123"
                          value={cardDetails.cvc}
                          onChange={(e) => setCardDetails({...cardDetails, cvc: e.target.value})}
                          required
                          className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 placeholder-gray-400 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PayPal message */}
              {paymentMethod === 'paypal' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-700">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You will be redirected to PayPal after placing your order.
                  </p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="group relative w-full mt-8 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Pay ${getCartTotal()} securely
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>

            {/* Security note */}
            <p className="mt-6 text-center text-xs text-gray-400 flex items-center justify-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Your payment information is encrypted and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;