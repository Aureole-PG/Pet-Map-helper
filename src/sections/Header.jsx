import React, { useRef, useState, useEffect } from "react";
import M from "materialize-css";
export const Header = ({
  send,
  petData,
  selectedPet,
  petsData = [],
  disabled,
}) => {
  const [modalInstance, setModalInstance] = useState(null);
  const modal = useRef(null);

  const selectPet = (pet) => {
    petData(pet);
    modalInstance.close();
  };

  useEffect(() => {
    setModalInstance(M.Modal.init(modal.current));
  }, []);

  return (
    <>
      <div className="container">
        <div className="flex">
          <h5>Pet Map Helper</h5>
        </div>
        <div className="flex">
          <div className="grid">
            <button
              onClick={() => modalInstance.open()}
              className="btn waves-effect"
              style={{ margin: "5px 0 " }}
            >
              {" "}
              select pet
            </button>

            {selectedPet && (
              <button
                onClick={() => send()}
                className="btn waves-effect"
                disabled={!disabled}
              >
                {" "}
                Save
              </button>
            )}
          </div>
        </div>
      </div>

      <div ref={modal} id="modal1" className="modal">
        <div className="modal-content">
          <h4>select pet</h4>
          <table>
            <thead>
              <tr>
                <th>pet name</th>
                <th>Owner</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {petsData.map((e) => (
                <tr key={e._id}>
                  <td>{e.name}</td>
                  <td>{e.owner}</td>
                  <td>{e.email}</td>
                  <td>
                    <button
                      onClick={() => selectPet(e)}
                      className="btn waves-effect"
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
