import React from "react";
import "./Modal.css";

class Modal extends React.Component {
  render() {
    return (
      <>
        <div className="darkBG" />
        <div className="centered">
          <div className="modal">
            <div className="modalContent">
              {/* Based on Props Change this */}
              {this.props.loading
                ? "Loading..."
                : this.props.data === 0
                ? "This is not a Good Wine"
                : "This is the Best Wine"}
            </div>
          </div>
          {!this.props.loading && (
            <div className="modalActions">
              <div className="actionsContainer">
                <button
                  onClick={(e) => {
                    this.props.closeModal(e);
                  }}
                  className="deleteBtn"
                >
                  Ok
                </button>
                <button
                  onClick={(e) => {
                    this.props.closeModal(e);
                  }}
                  className="cancelBtn"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Modal;
