import React from "react";
import './cart.css'
const Cart = () => {
  return (
    <div>
      <div className="cart-container">
        <div className="action-container">
        <div className="action-btn">
        <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="itemComponents-base-activeProduct "
            >
              <path
                fill-rule="evenodd"
                d="M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0"
              ></path>
            </svg>
        </div>
        <div className="cross-icon">
            <svg
            className="cross"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
             
            >
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M9.031 8l6.756-6.756a.731.731 0 0 0 0-1.031.732.732 0 0 0-1.031 0L8 6.969 1.244.213a.732.732 0 0 0-1.031 0 .731.731 0 0 0 0 1.03L6.969 8 .213 14.756a.731.731 0 0 0 0 1.031.732.732 0 0 0 1.031 0L8 9.031l6.756 6.756a.732.732 0 0 0 1.031 0 .731.731 0 0 0 0-1.03L9.031 8z"
              ></path>
            </svg>
          </div>
        </div>
      

        <div className="contain-details">   
            <div>
                <img width={111} height={148}  src="https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/23413762/2023/6/2/f5b1731f-cea2-449a-910f-33047a8d1b551685702329944-Mast--Harbour-Men-Shirts-4131685702329539-1.jpg" alt="" />
                </div>     
          <div className="details">
            <h2 className="title text-left">Mast & Harbour</h2>
            <p className="sub-title text-left">Men Standard Opaque Casual Pure Cotton Shirt</p>
            <p className="tags text-left">Sold by: PREMIER APPARELS</p>

          {/* Size and Quantity */}

            <div className="size-qty-container">
            <div>
                <span className="product-size">Size: 40</span>
            </div>
            <div>
                <span className="product-size">Qty: 1</span>
            </div>
          </div>

          {/* Price and discount */}
          <div className="price-discount">
            <div className="text-left price-container">
                <span className="price">₹699</span>
                <span className="actual-price">₹1199</span>
                <span className="discount-off">₹ 500 OFF</span>
            </div>
          </div>

          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Cart;
