import React from 'react';

class FormField extends React.Component {
  render() {
    return (
      <div id={this.props.fielContentId} className="field">
        <label
          className={`form-group col-md-6 tag`}
          htmlFor={this.props.fieldName}
        >
          {this.props.fieldName}
        </label>
        <div id={this.props.divInputId} className={this.props.borderRadius}>
          <div className="input-group-prepend">
            <span className={this.props.spanClass}>
              <i className={this.props.iconName}></i>
            </span>
          </div>
          <input
            type={this.props.inpuType}
            className={this.props.inputClass}
            placeholder={this.props.placeholderName}
          />
        </div>
      </div>
    );
  }
}

export default FormField;
