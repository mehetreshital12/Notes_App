import { useState, useEffect } from "react";
import Nav from "./components/Navbar/Nav";
import ModalDiv from "./components/Modal/Modal";
import { Frown } from "react-feather";
import SingleNote from "./components/SingleNote/SingleNote";
//import Footer from "./components/Footer/Footer";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("myNotes")) || []);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const refresher = () => {
    setData(JSON.parse(localStorage.getItem("myNotes")) || []);
  };
  return (
    <>
      <Nav
        setShowModal={setShowModal}
        data={data}
        setData={setData}
        refresher={refresher}
      />
      {showModal && (
        <ModalDiv
          showModal={showModal}
          setShowModal={setShowModal}
          refresher={refresher}
        />
      )}
      {/* Notes */}
      <div className="row justify-content-between mx-0 p-5">
        {!data.length ? (
          <h1 className="text-center display-1 text-secondary my-5">
            <Frown size={100} />
            No Notes. Create New One
          </h1>
        ) : (
          data.map((item, i) => {
            return (
              <SingleNote key={item.id} item={item} refresher={refresher} />
            );
          })
        )}
      </div>
      
    </>
  );
};

export default Home;
