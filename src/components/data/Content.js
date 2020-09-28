import React from "react";

const Content = ({ activeData }) => {
  console.log(activeData);
  return (
    <div style={{ padding: "10rem" }}>
      <h2>{activeData.title}</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h5>{activeData.description}</h5>
      <br />
      <br />
      <h5>{activeData.lastUpdate}</h5>
      <br />
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu sc elerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </p>
    </div>
  );
};

export default Content;
