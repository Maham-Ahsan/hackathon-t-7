import Image from 'next/image';
import { FaCcVisa, FaCcPaypal, FaCheckCircle, FaUser, FaPhone, FaMapMarkerAlt, FaCity } from 'react-icons/fa';
import { FaCircleDot } from 'react-icons/fa6';
import RentalSum from '../components/RentalSum';

const Checkout = () => {
  return (
    <div>
    <RentalSum />
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Billing Info */}
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
              <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Billing Info</h2>
                  <span className="text-sm text-gray-500">Step 1 of 4</span>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  {/* Name */}
                  <div className="flex items-center border border-gray-300 rounded-lg p-3">
                    <FaUser className="text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full focus:outline-none text-gray-700"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-center border border-gray-300 rounded-lg p-3">
                    <FaPhone className="text-gray-400 mr-3" />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full focus:outline-none text-gray-700"
                    />
                  </div>

                  {/* Address */}
                  <div className="flex items-center border border-gray-300 rounded-lg p-3">
                    <FaMapMarkerAlt className="text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full focus:outline-none text-gray-700"
                    />
                  </div>

                  {/* Town / City */}
                  <div className="flex items-center border border-gray-300 rounded-lg p-3">
                    <FaCity className="text-gray-400 mr-3" />
                    <input
                      type="text"
                      placeholder="Town or city"
                      className="w-full focus:outline-none text-gray-700"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Rental Info */}
            <div>
              <h1 className="text-gray-500 text-lg">Please Select your Rental Date</h1>
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="flex flex-col md:flex-col items-center justify-center gap-8 bg-white p-6 rounded-lg shadow-md w-full max-w-5xl">
                  {/* Pick-Up Section */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <FaCircleDot className="mr-2 text-blue-500" />
                      Pick-Up
                    </h3>
                    <div className="grid grid-row-1 gap-4">
                      <div>
                        <label className="block text-lg font-bold mb-1">Locations</label>
                        <select className="w-full border rounded-md p-2">
                          <option>Select your city</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-lg font-bold mb-1">Date</label>
                        <select className="w-full border rounded-md p-2">
                          <option>Select your Date</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-lg font-bold mb-1">Time</label>
                        <select className="w-full border rounded-md p-2">
                          <option>Select your Time</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Drop-Off Section */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <FaCircleDot className="mr-2 text-blue-500" />
                      Drop-Off
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-bold mb-1">Locations</label>
                        <select className="w-full border rounded-md p-2">
                          <option className="text-sm">Select your city</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-lg font-bold mb-1">Date</label>
                        <select className="w-full border rounded-md p-2">
                          <option>Select your Date</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-lg font-bold mb-1">Time</label>
                        <select className="w-full border rounded-md p-2">
                          <option>Select your Time</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="space-y-10">
    {/* Payment Method */}
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
      {/* Form */}
      <form className="space-y-6">
        {/* Card Number */}
        <label className="block text-lg font-bold mb-1">Card Number</label>
        <div className="flex items-center border border-gray-300 rounded-lg p-3">
          <input
            type="text"
            placeholder="Card number"
            className="w-full focus:outline-none text-gray-700"
          />
        </div>

        {/* Card Holder */}
        <label className="block text-lg font-bold mb-1">Card Holder</label>
        <div className="flex items-center border border-gray-300 rounded-lg p-3">
          <input
            type="tel"
            placeholder="Card Holder"
            className="w-full focus:outline-none text-gray-700"
          />
        </div>

        {/* Expiration Date */}
        <label className="block text-lg font-bold mb-1">Expiration Date</label>
        <div className="flex items-center border border-gray-300 rounded-lg p-3">
          <input
            type="text"
            placeholder="Expiration Date"
            className="w-full focus:outline-none text-gray-700"
          />
        </div>

        {/* CVC */}
        <label className="block text-lg font-bold mb-1">CVC</label>
        <div className="flex items-center border border-gray-300 rounded-lg p-3">
          <input
            type="text"
            placeholder="CVC"
            className="w-full focus:outline-none text-gray-700"
          />
        </div>
      </form>

    {/* Payment Option */}
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6">Payment Options</h2>
      <div className="space-y-4">
        <label className="flex items-center space-x-3">
          <input type="radio" name="payment" className="form-radio" />
          <FaCcVisa className="text-blue-600" size={24} />
          <span className="text-gray-600">Credit Card</span>
        </label>
        <label className="flex items-center space-x-3">
          <input type="radio" name="payment" className="form-radio" />
          <FaCcPaypal className="text-blue-600" size={24} />
          <span className="text-gray-600">PayPal</span>
        </label>
      </div>
      </div>
    </div>
  </div>
</div>


            {/* Confirmation */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
    <h2 className="text-2xl font-bold mb-6">Confirmation</h2>
    <p className="text-gray-500">
      We are getting to the end. Just a few clicks and your rental is ready!
    </p>
    <div className="bg-gray-300 p-3 rounded-md mt-4">
      <label className="flex items-center space-x-3">
        <input type="checkbox" className="form-checkbox" />
        <span className="text-gray-600">
          I agree with sending Marketing and newsletter emails. No spam, promised!
        </span>
      </label>
    </div>
    <div className="bg-gray-300 p-3 rounded-md mt-2">
      <label className="flex items-center space-x-3">
        <input type="checkbox" className="form-checkbox" />
        <span className="text-gray-600">
          I agree with our terms and conditions and privacy policy!
        </span>
      </label>
    </div>
    <button className="w-44 mt-4 bg-blue-600 text-white p-3 rounded-md flex items-center justify-center space-x-2">
      <span>Rental Now</span>
    </button>
    <span className="flex justify-center mt-6">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.0532 5.96044C24.1587 6.01156 23.2615 5.93978 22.3865 5.74711C21.3311 5.38571 20.344 4.84934 19.4665 4.16044C18.7159 3.62829 18.003 3.04467 17.3332 2.41377C17.0492 2.14852 16.6751 2.00098 16.2865 2.00098C15.8979 2.00098 15.5238 2.14852 15.2399 2.41377C14.5878 3.02472 13.9023 3.59894 13.1865 4.13377C12.3036 4.83173 11.3128 5.38115 10.2532 5.76044C9.25659 5.98562 8.23279 6.06645 7.2132 6.00044C6.37834 5.96587 5.54599 5.88575 4.71986 5.76044C4.51799 5.73051 4.31216 5.74155 4.11464 5.79288C3.91712 5.84421 3.73197 5.93479 3.57021 6.05922C3.40845 6.18365 3.2734 6.33938 3.17313 6.51712C3.07285 6.69486 3.00939 6.89098 2.98653 7.09377C2.91986 7.73377 2.74653 9.40044 2.66653 11.2538C2.55442 13.1055 2.67085 14.9639 3.0132 16.7871C3.97859 19.8077 5.75413 22.5056 8.14653 24.5871C10.0481 26.3808 12.1101 27.9964 14.3065 29.4138C14.8952 29.8179 15.5925 30.0343 16.3065 30.0343C17.0206 30.0343 17.7179 29.8179 18.3065 29.4138C20.3865 27.9595 22.3321 26.3218 24.1199 24.5204C26.3722 22.4237 28.0402 19.777 28.9599 16.8404"
          stroke="#1A202C"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6667 14.6667L18.48 18.48C18.5038 18.5059 18.5326 18.5265 18.5647 18.5406C18.5969 18.5548 18.6316 18.5621 18.6667 18.5621C18.7018 18.5621 18.7365 18.5548 18.7686 18.5406C18.8008 18.5265 18.8296 18.5059 18.8534 18.48L29.3334 8"
          stroke="#3563E9"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <div className="text-center mt-4">
      <h1 className="text-black text-lg">All your data are safe</h1>
      <p className="text-gray-500">
        We are using the most advanced security to provide you the best experience ever.
      </p>
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

export default Checkout;
