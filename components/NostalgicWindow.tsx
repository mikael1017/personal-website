import React from 'react';
import './NostalgicWindow.css'; // Create this CSS file
import Image from 'next/image';

const NostalgicWindow = (props) => {
    const {title, description, name, link, banner} = props;

  return (
    <div className="nostalgic-window text-center bg-low m-10">
      <div className="window-title-bar bg-med border-b-2 border-black">
        <span className="window-title font-bold">{name}</span>
        <div className="window-controls ">
          <div className="window-control"></div>
          <div className="window-control"></div>
          <div className="window-control"></div>
        </div>
      </div>
      <div className="window-content">
        <div className="banner">
          <Image src={banner} alt="bannerimg" />
        </div>
        <div className="content">
            <h1 className="text-3xl font-weight-900">{title}</h1>
            <p className="description">{description}</p>
        </div>
        <div>
            <div className="link">
                <a href={link} className="inline-block text-sm bg-med px-4 py-2 leading-none border rounded text-black
                border-med hover:border-transparent hover:text-low hover:bg-high mt-4 lg:mt-0">
                    View project
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NostalgicWindow;

