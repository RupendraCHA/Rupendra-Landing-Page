import React, { useState } from "react";
import { Link } from "react-router";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = {
    platform: {
      title: "Platform",
      sections: [
        {
          title: "BUILD",
          items: [
            { name: "Design", desc: "Build high-performing sites" },
            { name: "Edit mode", desc: "Empower your content team", isNew: true, },
            { name: "Interactions", desc: "Craft immersive experiences" },
            {
              name: "Page building",
              desc: "Launch simple landing pages quickly",
              isNew: true,
            },
          ],
        },
        {
          title: "MANAGE",
          items: [
            { name: "CMS", desc: "Manage content at scale" },
            {
              name: "Hosting",
              desc: "Host and scale your site without the hassle",
              isNew: true,
            },
            {
              name: "Localization",
              desc: "Customize your site for a worldwide audience",
            },
            { name: "Security", desc: "Ensure your site stays safe" },
          ],
        },
        {
          title: "OPTIMIZE",
          items: [
            {
              name: "Analyze",
              desc: "Understand how your site performs",
              isNew: true,
            },
            {
              name: "Optimize",
              desc: "Maximize conversions with testing",
              isNew: true,
            },
            { name: "SEO", desc: "Grow your reach with fine-tuned controls" },
          ],
        },
      ],
    },
    solutions: {
      title: "Solutions",
      items: [
        { name: "For Enterprise", desc: "Scale your business", isNew: true, },
        { name: "For Startups", desc: "Move faster with CodeTutor" },
        { name: "For Agencies", desc: "Win more clients" },
        { name: "For Marketing", desc: "Drive more growth", isNew: true, },
      ],
    },
    resources: {
      title: "Resources",
      items: [
        { name: "Showcase", desc: "Get inspired by the community" },
        { name: "Blog", desc: "Read latest news and articles" , isNew: true,},
        { name: "Documentation", desc: "Learn from our resources" },
        { name: "Community", desc: "Join the conversation" },
      ],
    },
  };

  return (
    <nav className="bg-[#000] text-white fixed top-0 left-0 right-0 border-b border-white/10">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/" className="text-xl font-bold">
              <span className="text-blue-500">Rupendra</span> CH
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            {Object.keys(menuItems).map((key) => (
              <div key={menuItems[key].title} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  {menuItems[key].title}
                  <MdKeyboardArrowUp
                    className={`ml-2 h-5 w-5 transition-transform ${
                      activeDropdown === key ? "transition rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Dropdown menu */}
                {activeDropdown === key && (
                  <div className="absolute left-0 mt-2 w-screen max-w-md py-1 bg-white rounded-md text-black shadow-lg">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 p-4">{
                            key === "platform" ? (
                                menuItems[key].sections.map((section, menuIndex) => (
                                    <div key={menuIndex}>
                                        <h3 className="text-xs font-semibold text-gray-500 tracking-wider mb-2">{section.title}</h3>
                                        <div>
                                            {section.items.map((item, itemIndex) => (
                                                <Link key={itemIndex} to={`/${key}/${item.name.toLowerCase()}`} className="group flex p-2 items-start rounded-lg hover:bg-gray-100 mx-2 my-1">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">
                                                      {item.name} 
                                                      {item.isNew && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-500">NEW</span>}
                                                    </p>
                                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                                </div>
                                            </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (<div>
                                {
                                    menuItems[key].items.map((item, index) => (
                                        <Link key={index} to={`/${key}/${item.name.toLowerCase()}`} className="group flex p-2 items-start rounded-lg hover:bg-gray-100 mx-2 my-1">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{item.name} 
                                                {item.isNew && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-500">NEW</span>}

                                                </p>
                                                <p className="text-sm text-gray-500">{item.desc}</p>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>)
                        }</div>
                  </div>
                )}
              </div>
            ))}

            <Link to="/enterprise" className="hover:text-gray-300">
              Enterprise
            </Link>
            <Link to="/pricing" className="hover:text-gray-300">
              Pricing
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="hover:text-gray-300 hidden xl:block">Login</Link>
            <Link to="/contact" className="hover:text-gray-300 hidden xl:block">Contact Sales</Link>
            <Link to="/get-started" className="hover:text-white-300 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Get Started - It's free</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 hover:bg-gray-700">
              {
                !isMenuOpen ? <IoIosMenu className="block w-6 h-6"/> : <IoMdClose className="block w-6 h-6"/>
              }
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {
              Object.keys(menuItems).map((key) => (
                <div key={key.title}>
                  <button
                  onClick={() => toggleDropdown(key)}
                  className="hover:text-gray-300 px-3 py-2 rounded-md text-sm flex items-center"
                >
                  {menuItems[key].title}
                  <MdKeyboardArrowUp
                    className={`ml-2 h-5 w-5 transition-transform ${
                      activeDropdown === key ? "transition rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Dropdown menu */}
                {activeDropdown === key && (
                  <div className="bg-white text-black">
                    <div className="pl-4">{
                            key === "platform" ? (
                                menuItems[key].sections.map((section, menuIndex) => (
                                    <div key={menuIndex}>
                                        <h3 className="text-xs font-semibold text-gray-500 tracking-wider mb-2">{section.title}</h3>
                                        <div>
                                            {section.items.map((item, itemIndex) => (
                                                <Link key={itemIndex} to={`/${key}/${item.name.toLowerCase()}`} className="group flex p-2 items-start rounded-lg hover:bg-gray-100 mx-2 my-1">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">
                                                      {item.name} 
                                                      {item.isNew && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-500">NEW</span>}
                                                    </p>
                                                    {/* <p className="text-sm text-gray-500">{item.desc}</p> */}
                                                </div>
                                            </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (<div>
                                {
                                    menuItems[key].items.map((item, index) => (
                                        <Link key={index} to={`/${key}/${item.name.toLowerCase()}`} className="group flex p-2 items-start rounded-lg hover:bg-gray-100 mx-2 my-1">
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{item.name} 
                                                {item.isNew && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-500">NEW</span>}

                                                </p>
                                                {/* <p className="text-sm text-gray-500">{item.desc}</p> */}
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>)
                        }</div>
                  </div>
                )}
                </div>
              ))
            }
            <Link to="/enterprices" className="block px-3 py-2 hover:bg-gray-700">Enterprices</Link>
            <Link to="/enterprices" className="block px-3 py-2 hover:bg-gray-700">Pricing</Link>
            <Link to="/enterprices" className="block px-3 py-2 hover:bg-gray-700">Login</Link>
            <Link to="/enterprices" className="block px-3 py-2 hover:bg-gray-700">Contact Sales</Link>
            <Link to="/enterprices" className="block px-3 py-2 bg-blue-600 hover:bg-blue-700">Get Started - It's free</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
