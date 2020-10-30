import React, {useState} from "react";

const Content = ({ activeData }) => {

  const [displayData, setDisplayData] = useState(activeData) // displayData separated from activeData in purpose of scoping chart
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dataset title: {displayData.title}</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h5>Dataset description: {displayData.description}</h5>
      <br />
  {displayData.labels && displayData.labels.map((label, i) => <div key={label}>{label} - {displayData.values[i]}</div>)}
      <br />      
      <br />
      <br />
      <h5>Last updated: {displayData.lastUpdate}</h5>
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
