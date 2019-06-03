import React, { Component } from 'react';
class MaterialModal extends Component {
    render() {
        return (
            <div className="">
              <div className="__modal open">
                <div className="modal">
                  <div className="content">
                    <div className="modal__header">
                      <h6 className="modal__title">Type your modal title</h6>
                      <button type="button" className="close">
                        <span>×</span>
                      </button>
                    </div>
                    <div className="modal__body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                      </p>
                    </div>
                    <div className="modal__footer">
                      <button type="button" className="btn btn-primary">Save changes</button>
                      <button type="button" className="btn btn-link close">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }

}

export default MaterialModal