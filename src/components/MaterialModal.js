import React, { Component } from 'react';
import MaterialButton from './MaterialButton'
class MaterialModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
        this.modalClick = this.modalClick.bind(this)
    }
    modalClick() {
        this.setState({
            modal: !this.state.modal
        })
    }
    render() {
        return (
            <div className="">
              {this.props.modal.map((item, index) => {
                return(
                  <div >
                  <MaterialButton type="button" btnClass={item.btnClass} onClick={this.modalClick} btnName={item.btnName} />
                  <div className={ this.state.modal ? "__modal open" : "__modal " }>
                    <div className="modal" key={index}>
                      <div className={item.type } >
                        <div className="content">
                          <div className="modal__header">
                            <h6 className="modal__title">{item.title}</h6>
                            <button type="button" className="close" onClick={this.modalClick }>
                              <span>×</span>
                            </button>
                          </div>
                          <div className="modal__body">
                            <p>{item.text}</p>
                          </div>
                          <div className="modal__footer">
                            <MaterialButton type="button" btnClass="btn-primary save" btnName="Save changes" />
                            <MaterialButton type="button" btnClass="btn-danger close"  onClick={this.modalClick } btnName="Close" />
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div> 
                  </div>
                )})}
              </div>
        )
    }

}

export default MaterialModal