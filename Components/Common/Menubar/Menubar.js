import React from 'react'
import style from '../Menubar/Menubar.module.css'
import Link from 'next/link';

// Bootstrap

import { Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Icon

import { IoMdCheckmark } from "react-icons/io";
import { BiErrorCircle} from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart} from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";



const Menubar = () => {

  return (

    <div>

        {/* ================================================================================================
              Menubar Top
        ===================================================================================================*/}

        <section>

            <Container>

              <div className={style.MenubarTopDiv}>

                <div className={style.MenubarTopTxtDiv}>

                    <p> <IoMdCheckmark /> Free shipping on all orders over $50</p>

                </div>

                {/* Right ------------- */}

                <div className={style.MenubarTopTxtDivRight}>

                  <div>

                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        Eng<MdKeyboardArrowDown/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Ban</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Malay</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Hindi</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </div>

                  <div>

                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                      Faqs <MdKeyboardArrowDown/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className={style.DropMenu}>
                        <Dropdown.Item href="#/action-1">Ban</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Eng</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">UK</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  </div>

                  <div className={style.MenubarTopTxtlastDiv}>

                    <p><BiErrorCircle/>Need Help</p>

                  </div>

                </div>

              </div>

            </Container>

            <div className={style.Hr}></div>

            {/* ================================================================================================
                      Menubar mid
            ===================================================================================================*/}
            <Container>

                <div className={style.MenubarMidDiv}>

                  <div>
                      <img src="/images/logo.png" alt="" />
                  </div>

                  <div>

                    <InputGroup  className={style.MenubarMidInput}>
                      <Form.Control className={style.MenubarMidInput2}
                        placeholder="Search here..."
                        aria-label="Search here..."
                        aria-describedby="basic-addon2"
                      />
                      <Button variant="outline-secondary" id="button-addon2">
                        <BsSearch/>
                      </Button>
                    </InputGroup>

                  </div>

                {/* mid last */}

                  <div className={style.MenubarMidDivLast}>

                      <ul>

                        <li>

                          <p>
                            <FiShoppingCart/> 
                            Cart
                            <span>2</span> 
                           <AiOutlineHeart/>
                           <HiOutlineUser/>


                           </p>
                        
                        </li>

                      </ul>

                  </div>

                </div>

            </Container>



            {/* ================================================================================================
                      Menubar Top
            ===================================================================================================*/}




        </section>

    </div>
    
  )
}

export default Menubar