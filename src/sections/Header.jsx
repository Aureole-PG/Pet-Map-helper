import React, { useRef, useState, useEffect } from "react";
import M from "materialize-css";
export const Header = ({ position, send, getId, selectedPet }) => {
  const [modalInstance, setModalInstance] = useState(null);
  const modal = useRef(null);

  const selectPet = (id) => {
    getId(id);
    modalInstance.close();
  };

  useEffect(() => {
    setModalInstance(M.Modal.init(modal.current));
    console.log(selectedPet);
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
              Seleccionar Mascota
            </button>

            {selectedPet && (
              <button
                onClick={() => modalInstance.open()}
                className="btn waves-effect"
              >
                {" "}
                Guardar
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
                <th>Name</th>
                <th>Owner</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>
                  <button
                    onClick={() => selectPet(123)}
                    className="btn-large waves-effect"
                  >
                    Select
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
