function Footer() {
  return (
    <div className="bg-[#1e1e1e] text-white mt-2">
      <div className="max-w-7xl mx-auto w-full p-4">
        <div className="border-b border-gray-700 pb-3">
          <h1 className="text-primary uppercase font-medium">luxeAttire.</h1>
          <p className="text-gray-500 text-[13px]">
            LuxeAttire is where sophistication meets style. Upgrade your
            wardrobe and elevate your look with luxeAttire - because you deserve
            to shine. Discover our curated collection of must-have pieces for
            your wardrobe. From sleek basics to statement prints, we have
            everything you need to elevate your style. Shop our featured
            products and find the perfect addition to your closet today.
          </p>
        </div>
        <div className="mt-3 flex justify-between items-start gap-3 flex-wrap border-b pb-2 border-gray-700">
          <div className="flex flex-col gap-1.5 flex-1 whitespace-nowrap">
            <h2>Categories</h2>
            <ul className="flex flex-col gap-1 text-gray-500 text-sm">
              <li>Men</li>
              <li>Kids</li>
              <li>Women</li>
              <li>Latest</li>
              <li>Features</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 whitespace-nowrap">
            <h2>Useful Links</h2>
            <ul className="flex flex-col gap-1 text-gray-500 text-sm">
              <li>Price drop</li>
              <li>New Products</li>
              <li>Best sales</li>
              <li>Contact us</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 whitespace-nowrap">
            <h2>Services</h2>
            <ul className="flex flex-col gap-1 text-gray-500 text-sm">
              <li>Delivery</li>
              <li>24/7 Support</li>
              <li>Refunding policy</li>
              <li>Inquiries</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 whitespace-nowrap">
            <h2>Our Company</h2>
            <ul className="flex flex-col gap-1 text-gray-500 text-sm">
              <li>Legal Notice</li>
              <li>Terms and conditions</li>
              <li>Secure payment</li>
              <li>Latest news</li>
              <li>Our blog</li>
            </ul>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 whitespace-nowrap">
            <h2>Contact</h2>
            <ul className="flex flex-col gap-1 text-gray-500 text-sm">
              <li>(123) - 456 - 7890</li>
              <li>contact@luxeAttire.com</li>
              <li>123, Main Street</li>
              <li>Administrator</li>
              <li>Appointment</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 flex flex-col justify-center items-center text-center gap-2 text-sm">
          <img
            src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/payment.png"
            alt=""
          />
          <span>Copyright &copy; 2024 LuxeAttire, All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
