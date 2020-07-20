import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import FormField from './FormField';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <form id="form">
    <h1 id="header">Registro Personal</h1>
    <div id="content">
      <FormField
        fielContentId="name"
        fieldName="Primer Nombre"
        placeholderName="Primer Nombre"
        borderRadius="input-group"
        spanClass="input-group-text input-group input-group-prepend"
        iconName="icon fa fa-user"
        inputType="text"
        inputClass="form-control input-group"
      />

      <FormField
        fielContentId="last-name"
        fieldName="Apellido"
        placeholderName="Apellido"
        borderRadius="input-group"
        spanClass="input-group-text input-group input-group-prepend"
        iconName="icon fa fa-user"
        inputType="text"
        inputClass="form-control input-group"
      />

      <FormField
        fielContentId="email"
        fieldName="Correo Electrónico"
        placeholderName="Correo Electrónico"
        borderRadius="input-group"
        spanClass="input-group-text input-group input-group-prepend"
        iconName="icon fa fa-envelope"
        inputType="text"
        inputClass="form-control input-group"
      />

      <FormField
        fielContentId="password"
        fieldName="Contraseña"
        placeholderName="Contraseña"
        borderRadius="input-group"
        spanClass="input-group-text input-group input-group-prepend"
        iconName="icon fa fa-key"
        inputType="password"
        inputClass="form-control input-group"
      />

      <FormField
        fielContentId="direction"
        fieldName="Dirección"
        placeholderName="Dirección"
        borderRadius="input-group"
        spanClass="input-group-text input-group input-group-prepend"
        iconName="icon fa fa-home"
        inputType="text"
        inputClass="form-control input-group"
      />

      <FormField
        fielContentId="city"
        fieldName="Ciudad"
        divInputId="city"
        inputType="text"
        inputClass="form-control"
      />

      <FormField
        fielContentId="postcode"
        fieldName="Código Postal"
        divInputId="postcode"
        inputType="text"
        inputClass="form-control"
      />
    </div>
    <div className="form-footer">
      <div id="terms-accept">
        <input id="check" type="checkbox" />
        <label htmlFor="acepto-terminos">
          {' '}
          Estoy de acuerdo con el registro de datos personales
        </label>
      </div>
      <input
        id="save-button"
        className="form-control"
        type="button"
        value="Guardar"
      />
    </div>
  </form>,
  document.querySelector('#root'),
);

serviceWorker.unregister();
